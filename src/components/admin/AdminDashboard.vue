<template>
<div>
  <DashboardLayout>
    <b-container fluid id="lay" >
      <b-row>
          <b-col cols="4">
            <router-link to="/admin/viewadmin">
              <b-card class="mb-2 text-center card cad">
                <b-card-header>Administrator</b-card-header>
                <b-card-text>
                  <b-badge variant="danger">9 </b-badge>
                </b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="4">
            <router-link to="/admin/serviceprovider" class="cad">
              <b-card class="mb-2 text-center card cad">
                <b-card-header>TSP</b-card-header>
                <b-card-text>
                  <b-badge variant="danger">9 </b-badge>
                </b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="4">
            <router-link to="/admin/station" class="cad">
              <b-card class="mb-2 text-center card cad">
                <b-card-header>Stations</b-card-header>
                <b-card-text>
                  <b-badge variant="danger">9 </b-badge>
                </b-card-text>
              </b-card>
            </router-link>
          </b-col>
      </b-row>
    </b-container>
  </DashboardLayout>
  </div>
</template>
<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
export default {
  name: 'AdminDashboard',
  components: {
    DashboardLayout
  }
}
</script>
