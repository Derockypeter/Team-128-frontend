<template>
  <landing-layout>
    <div class="Signup-box">
      <b-form class="form" @submit="onSubmit" @reset="onReset">
        <b-img class="img" src="../assets/images/RailT.jpg"></b-img>
        <b-form-group
          id="input-group-1"
        >
          <input class="input"
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          >
        </b-form-group>

        <b-form-group id="input-group-2"
        label-for="input-2">
          <input class="input"
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
          >
        </b-form-group>

        <button type="submit" class="button">Submit</button>

      </b-form>
    </div>
  </landing-layout>
</template>

<script>
import LandingLayout from "./layout/LandingLayout.vue";
export default {
  name: "Login",
  components: {
    LandingLayout
  },
  data() {
    return {
      form: {
        email: "",
        name: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";

      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>
<style scoped>
@import url("../assets/css/loginlogout.css");
</style>
