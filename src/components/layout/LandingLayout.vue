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
                ><router-link to="/login"> Login</router-link></b-nav-item
              >
              <b-nav-item class="bton"
                ><router-link to="/signup">Sign up</router-link></b-nav-item
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
export default {
  name: "LandingLayout"
};
</script>
