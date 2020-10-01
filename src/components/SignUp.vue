<template>
  <landing-layout>
    <div class="Signup-box">
      <b-form class="form" @submit="onSubmit" @reset="onReset">
        <b-img class="img" src="../assets/images/RailT.jpg"></b-img>
        <b-form-group
          id="input-fname"
        >
          <input class="input"
            id="fname"
            v-model="form.fname"
            type="text"
            required
            placeholder="Enter First Name"
          >
        </b-form-group>

        <b-form-group
          id="input-Lname"
        >
          <input class="input"
            id="Lname"
            v-model="form.Lname"
            type="text"
            required
            placeholder="Enter Last Name"
          >
        </b-form-group>

        <b-form-group id="input-email"
        >
          <input class="input"
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter Email"
          >
        </b-form-group>

        <b-form-group
          id="input-phone"
        >
          <input class="input"
            id="phone"
            v-model="form.phone"
            type="tel"
            required
            placeholder="Enter Phone Number"
          >
        </b-form-group>

        <b-form-group id="input-password"
        >
          <input class="input"
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
          >
        </b-form-group>

        <b-form-group id="input-cPassword"
        >
          <input class="input"
            id="password"
            v-model="form.cPassword"
            type="password"
            required
            placeholder="Re-Enter Password"
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
