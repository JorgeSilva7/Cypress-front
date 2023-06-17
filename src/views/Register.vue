<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <div class="text-h3" style="padding: 50px 0px">Sign up</div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        for="register-email"
        filled
        v-model="email"
        label="Email"
        lazy-rules
        type="email"
        :rules="[(val) => (val && val.length > 0) || 'Please type an email']"
      />

      <q-input
        for="register-name"
        filled
        v-model="name"
        label="Name"
        lazy-rules
        type="text"
        :rules="[(val) => (val && val.length > 0) || 'Please type your name']"
      />

      <q-input
        for="register-rut"
        filled
        v-model="rut"
        label="RUT"
        hint="RUT in any format"
        lazy-rules
        type="text"
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your RUT (DNI)',
          (val) => (val && rutjs.validate(val)) || 'The RUT is not valid',
        ]"
      />

      <q-input
        for="register-password"
        filled
        type="password"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type a password',
        ]"
      />

      <q-input
        for="register-password"
        filled
        type="password"
        v-model="confirmPassword"
        label="Confirm the password"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Please confirm the password',
          (val) => (val && val == password) || 'Passwords do not match',
        ]"
      />

      <p>
        Already registered?
        <router-link to="/login" class="text-weight-light">Sign in</router-link>
      </p>

      <div>
        <q-btn
          id="register-submit"
          label="Register"
          type="submit"
          color="primary"
        />
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
import { register } from "@/services/auth.service";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import rutjs from "rut.js";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();

    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);
    const name = ref(null);
    const confirmPassword = ref(null);
    const rut = ref(null);

    return {
      email,
      password,
      name,
      confirmPassword,
      rut,
      rutjs,

      async onSubmit() {
        $q.loading.show();
        const response = await register({
          email: email.value,
          password: password.value,
          name: name.value,
          rut: rut.value,
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
            message: "Please login",
          });

          await router.push({ name: "login" });
        }
      },

      onReset() {
        email.value = null;
        password.value = null;
        name.value = null;
        rut.value = null;
        confirmPassword.value = null;
      },
    };
  },
};
</script>