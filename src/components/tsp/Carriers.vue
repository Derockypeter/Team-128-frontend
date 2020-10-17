<template>
  <div>
    <DashboardLayout>
      <div class="dashboardcon">
        <div class="dashboardlink">
          <router-link to="/tsp/dashboard">Dashboard</router-link> >
          <router-link to="/tsp/carrier">View Carriers</router-link>
        </div>
        <div>
          <button v-b-modal.addSchedule>
            <i class="fa fa-plus" aria-hidden="true"></i> New
          </button>
        </div>
        <div class="table">
          <b-table striped hover :items="items"></b-table>
        </div>
        <b-modal id="addSchedule" title="Add Carrier">
          <div id="modal" class="">
            <b-form class="form" @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-cname">
                <input
                  class="input"
                  id="input-cname"
                  v-model="form.cname"
                  type="text"
                  required
                  placeholder="Enter carrier name"
                />
              </b-form-group>
              <b-form-group id="input-cnumber">
                <input
                  class="input"
                  id="input-cnumber"
                  v-model="form.cnumber"
                  type="text"
                  required
                  placeholder="Enter carrier Reg number"
                />
              </b-form-group>
              <b-form-group id="input-capacity">
                <input
                  class="input"
                  id="input-capacity"
                  v-model="form.capacity"
                  type="number"
                  required
                  placeholder="Enter carrier capacity"
                />
              </b-form-group>
              <button type="submit" class="button">Add</button>
            </b-form>
          </div>
        </b-modal>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from '../layout/DashboardLayout.vue'
export default {
  name: 'Carriers',
  components: {
    DashboardLayout
  },
  data () {
    return {
      items: [
        {
          carrier_name: 'F 25 cargo',
          reg_number: 'C 250',
          capacity: '200'
        }
      ],
      form: {
        email: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''

      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>
