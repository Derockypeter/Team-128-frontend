<template>
<DashboardLayout>
  <div>
    <div class="text-center">
  <router-link to="/admin/dashboard">
  <b-card
    class="mb-2 card cad"
    title="Administrators"
    img-src=""
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
  >
    <b-card-text>
<b-badge variant="danger">9 <span class="sr-only">unread messages</span></b-badge>
    </b-card-text>
  </b-card>
  </router-link>
</div>
</div>
</DashboardLayout>
</template>
<script>
import DashboardLayout from "../layout/DashboardLayout.vue"
export default {
  name: "AdminDashboard",
  components: {
    DashboardLayout
  }
}
</script>
