<template>
  <div class="q-pa-md" style="max-width: 900px; margin: auto">
    <div class="home">
      <div v-if="user">
        <q-item clickable v-ripple id="user" @click="showRut = true">
          <q-item-section side>
            <q-avatar rounded size="80px">
              <img :src="user.photo" />
              <q-badge floating :color="user.verified ? 'teal' : 'red'">{{
                user.verified ? "verified" : "unverified"
              }}</q-badge>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="user-name">{{ user.name }}</q-item-label>
            <q-item-label class="user-email">{{ user.email }}</q-item-label>
            <q-item-label class="user-rut">{{
              `${rutjs.format(user.rut).substring(0, 6)}****`
            }}</q-item-label>
            <q-item-label caption style="margin-top: 12px"
              >This user is {{ user.blocked ? "blocked" : "unblocked" }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            {{
              dateTime
                .fromISO(user.createdAt)
                .toFormat("'Created on' dd-MM-yyyy 'at' HH:mm")
            }}
          </q-item-section>
        </q-item>
        <div style="margin-top: 30px">
          <q-btn
            :color="`${user.blocked ? 'green' : 'red'}`"
            :label="`${user.blocked ? 'unblock' : 'block'}`"
            @click="changeBlockStatus()"
          />
          &nbsp;
          <q-btn color="primary" label="Logout" @click="logout()" />
        </div>
      </div>
    </div>

    <q-dialog
      v-model="showRut"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card :class="`${user.blocked ? 'bg-red' : 'bg-primary'} text-white`">
        <q-bar>
          <q-icon name="schedule" />
          <div>{{ dateTime.now().toFormat("HH:mm") }}</div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h5">{{ user.name }}</div>
        </q-card-section>
        <q-card-section class="text-center">
          <q-avatar rounded size="350px">
            <img :src="user.photo" />
          </q-avatar>
        </q-card-section>

        <q-card-section class="text-h6" id="user-rut-complete">
          <strong>RUT: </strong>{{ rutjs.format(user.rut) }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {
  getMe,
  changeBlockStatus as changeBlockStatusRequest,
} from "@/services/auth.service";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { logout as logoutHelper } from "@/services/helpers";
import { DateTime } from "luxon";
import rutjs from "rut.js";

export default {
  name: "HomeView",
  mounted() {
    setTimeout(() => {
      this.loadUser();
    }, 100);
  },
  setup() {
    const router = useRouter();

    const $q = useQuasar();

    const user = ref(null);

    return {
      user,
      dateTime: DateTime,
      rutjs,
      showRut: ref(false),

      async loadUser() {
        $q.loading.show();
        const response = await getMe();
        $q.loading.hide();

        if (response.error) {
          this.user = null;
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: response.message.msg ?? response.message ?? response,
          });
          await router.replace({ path: "login", query: { login_error: "1" } });
        } else {
          this.user = response;
          if (!this.user.verified) {
            localStorage.removeItem("verified");
            await router.replace({
              name: "verify",
              query: { verify_error: "1" },
            });
          }
        }
      },

      async changeBlockStatus() {
        $q.loading.show();
        const response = await changeBlockStatusRequest();
        $q.loading.hide();

        if (response.error) {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: response.message.msg ?? response.message ?? response,
          });
        } else {
          this.user = response;
        }
      },

      async logout() {
        logoutHelper();
        await router.replace({ name: "login" });
      },
    };
  },
};
</script>
 