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
  components: {
    LandingLayout
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        const response = await apiService.loginUser(this.form)
        this.errors = {}
        this.flashMessage.success({
          message: 'Successful login',
          time: 5000
        })
        console.log(response)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        console.log(error.response)
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors
            break
          case 401:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            })
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
