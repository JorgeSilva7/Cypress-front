<template>
  <div class="home">
    <q-banner v-if="!user" inline-actions class="text-white bg-red">
      No estas logueado.
    </q-banner>
    <div v-else>
      <q-item clickable v-ripple>
        <q-item-section side>
          <q-avatar rounded size="48px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <q-badge floating :color="user.verified ? 'teal' : 'red'">{{
              user.verified ? "verified" : "unverified"
            }}</q-badge>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="user-name">{{ user.name }}</q-item-label>
          <q-item-label caption
            >This user are {{ user.blocked ? "blocked" : "unblocked" }}
          </q-item-label>
        </q-item-section>
        <q-item-section side> {{ user.createdAt }} </q-item-section>
      </q-item>
      <div>
        <q-btn color="primary" label="Logout" @click="logout()" />
      </div>
    </div>
  </div>
</template>

<script>
import { getMe } from "@/services/auth.service";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

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

      async loadUser() {
        const response = await getMe();
        if (response.error) {
          this.user = null;
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
        localStorage.clear();
        await router.replace({ name: "login" });
      },
    };
  },
};
</script>
