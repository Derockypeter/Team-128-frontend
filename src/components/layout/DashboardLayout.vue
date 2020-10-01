<template>
  <div>
    <header class="heading">
      <div>
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Dashboard</b-nav-item>
              <b-nav-item href="#">About Us</b-nav-item>
              <b-nav-item href="#">Our Team</b-nav-item>
            </b-navbar-nav>
            <b-navbar-brand href="#">
              <b-img
                class="im"
                src="../../assets/images/RailT.jpg"
                fluid
                alt="Logo"
              ></b-img>
            </b-navbar-brand>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Login</b-dropdown-item>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>
<style>
@import '../../assets/css/style.css'
</style>
