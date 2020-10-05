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
            v-model="form.firstname"
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
            v-model="form.lastname"
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
            v-model="form.mobile"
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
      <br><br>
      <button id="" class="button">Sign with Facebook</button>
    </div>
  </landing-layout>
</template>

<script>
import LandingLayout from './layout/LandingLayout.vue'
import * as apiService from '../services/auth/index'
export default {
  name: 'Login',
  mounted () {

  },
  components: {
    LandingLayout
  },
  data () {
    return {
      form: {
        email: '',
        firstname: '',
        lastname: '',
        mobile: '',
        password: ''
      },
      fbsigin: {
        personalID: '',
        email: '',
        name: '',
        picture: ''
      },
      errors: {}
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        const response = await apiService.registerUser(this.form)
        this.errors = {}
        console.log(response)
        this.flashMessage.success({
          message: 'Registration successful, Please login',
          time: 5000
        })
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
        console.log(error.response)
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors
            break
          case 500:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            })
            break
          default:
            this.flashMessage.error({
              message: 'Some error occured, try again',
              time: 5000
            })
            break
        }
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.password = ''
    }
  }
}
</script>
<style scoped>
@import url('../assets/css/loginlogout.css')
</style>
