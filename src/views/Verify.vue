<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        for="verify-code"
        filled
        v-model="code"
        label="Code"
        hint="Verification code"
        lazy-rules
        type="text"
        :rules="[
          (val) =>
            (val && val.length > 5) || 'Please type the verification code',
        ]"
      />

      <div>
        <q-btn
          id="verify-submit"
          label="Submit"
          type="submit"
          color="primary"
        />
      </div>
      <div>
        <q-btn
          id="verify-resend"
          label="Resend code"
          color="green"
          @click="resendCode()"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { verify } from "@/services/auth.service";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "VerifyView",
  mounted() {
    this.onVerifyError();
  },
  setup() {
    const router = useRouter();

    const $q = useQuasar();

    const code = ref(null);

    const goToHome = async () => {
      localStorage.setItem("verified", true);
      await router.push({ name: "home" });
    };

    return {
      code,

      async onSubmit() {
        $q.loading.show();
        const response = await verify({
          code: code.value,
        });
        $q.loading.hide();

        if (response.error) {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: response.message,
          });
          if (response.name === "verify_already_verified_error") {
            await goToHome();
          }
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "check",
            message: "Verification successful",
          });

          await goToHome();
        }
      },

      async resendCode() {
        $q.loading.show();
        setTimeout(() => {
          $q.notify({
            color: "orange-4",
            textColor: "white",
            icon: "info",
            message: "Feature not developed yet",
          });
          $q.loading.hide();
        }, 1000);
      },

      onVerifyError() {
        if (this.$route.query.verify_error === "1") {
          $q.notify({
            color: "red-4",
            textColor: "white",
            icon: "warning",
            message: "You need to verify your account",
          });
          localStorage.removeItem("verified");
        }
      },
    };
  },
};
</script>