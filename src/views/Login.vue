<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <div class="text-h3" style="padding: 50px 0px">Sign in</div>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        for="login-email"
        filled
        v-model="email"
        label="Email"
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
      <p>
        Don't have an account?
        <router-link to="/register" class="text-weight-light"
          >Sign up here</router-link
        >
      </p>
      <div>
        <q-btn id="login-submit" label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { login } from "@/services/auth.service";
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