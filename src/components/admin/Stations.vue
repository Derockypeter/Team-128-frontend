<template>
  <div>
    <DashboardLayout>
      <div class="dashboardcon">
        <div class="dashboardlink">
        <router-link to="/admin/dashboard">Dashboard</router-link> >
        <router-link to="/admin/station">View Service Provider</router-link>
        </div>
        <div>
      <button v-b-modal.addAdmin><i class="fa fa-plus" aria-hidden="true"></i> New</button>
      </div>
      <div class="table">
        <b-table striped hover :items='items'></b-table>
      </div>
      <b-modal id="addServiceProvider" title="Add Service Provider">
        <div id="modal" class="">
          <b-form class="form" @submit='onSubmit' @reset='onReset'>
            <b-form-group id="input-name">
              <input
                class="input"
                id="input-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter Station name"
              />
            </b-form-group>
            <b-form-group id="input-state">
              <input
                class="input"
                id="input-state"
                v-model="form.state"
                type="text"
                required
                placeholder="Enter Station State"
              />
            </b-form-group>
            <b-form-group id="input-town">
              <input
                class="input"
                id="input-town"
                v-model="form.town"
                type="town"
                required
                placeholder="Enter station town"
              />
            </b-form-group>

            <b-form-group id="input-number">
              <input
                class="input"
                id="input-number"
                v-model="form.number"
                type="text"
                required
                placeholder="Enter station number"
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
  name: 'ServiceProvider',
  components: {
    DashboardLayout
  },
  data () {
    return {
      items: [
        {
          number: '4a',
          station_name: 'Ibrahim Nok rail Station',
          state: 'kaduna',
          town: 'Nok'
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
