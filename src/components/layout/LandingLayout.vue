<template>
  <b-container fluid>
    <b-row>
      <header class="heading">
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand href="#">
            <b-img src="../images/RailT.jpg" fluid alt="Logo"></b-img>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item><router-link to="/">Home</router-link> </b-nav-item>
              <b-nav-item
                ><router-link to="/dashboard">About Us</router-link></b-nav-item
              >
              <b-nav-item
                ><router-link to="/">Our Team</router-link></b-nav-item
              >
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                v-if="isLogged"><a @click="onLogout">Logout</a></b-nav-item
              >
              <b-nav-item
                v-if="!isLogged"><router-link to="/login"> Login</router-link></b-nav-item
              >
              <b-nav-item class="bton"
                 v-if="!isLogged"><router-link to="/signup">Sign up</router-link></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
      <slot />
      <footer class="foot">
        <p>Group 128A SDG cohort 2, Copyright &copy; 2020</p>
      </footer>
    </b-row>
  </b-container>
</template>

<script>
import * as apiService from '../../services/auth'
export default {
  name: 'LandingLayout',
  data () {
    return {
      isLogged: false,
      errors: {}
    }
  },
  mounted () {
    if (apiService.isLoggedIn()) {
      this.isLogged = true
    }
  },
  methods: {
    async onLogout () {
      try {
        await apiService.logoutUser()
        this.errors = {}
        this.flashMessage.success({
          message: 'Logout Successfully',
          time: 5000
        })
        this.isLogged = false
        if (this.$route.name !== 'LandingPage') {
          this.$router.push('/')
        }
      } catch (error) {
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
    }
  }
}

</script>
