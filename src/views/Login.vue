<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        for="login-email"
        filled
        v-model="email"
        label="Login"
        hint="Email"
        lazy-rules
        type="email"
        :rules="[(val) => (val && val.length > 0) || 'Please type your email']"
      />

      <q-input
        for="login-password"
        filled
        type="password"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      />

      <div>
        <q-btn id="login-submit" label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { axiosInstance, login } from "@/services/auth.service";
import { setToken } from "@/services/helpers";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  mounted() {
    this.onLoginError();
  },
  setup() {
    const router = useRouter();

    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);

    return {
      email,
      password,

      async onSubmit() {
        $q.loading.show();
        const response = await login({
          email: email.value,
          password: password.value,
        });
        $q.loading.hide();

        if (response.error) {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: response.message,
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "check",
            message: "Login correcto",
          });

          setToken(response.token);

          await router.push({ name: "home" });
        }
      },

      onReset() {
        email.value = null;
        password.value = null;
      },

      onLoginError() {
        if (this.$route.query.login_error === "1") {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: "Please enter your credentials",
          });
        }
      },
    };
  },
};
</script>