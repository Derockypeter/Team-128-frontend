<template>
  <div>
    <DashboardLayout>
      <div class="dashboardcon">
        <div class="dashboardlink">
        <router-link to="/admin/dashboard">Dashboard</router-link> >
        <router-link to="/admin/viewadmin">View admin</router-link>
        </div>
        <div>
      <button v-b-modal.addAdmin><i class="fa fa-plus" aria-hidden="true"></i> New</button>
      </div>
      <div class="table">
        <b-table striped hover :items='items'></b-table>
      </div>
      <b-modal id="addAdmin" title="Add Administrator">
        <div id="modal" class="">
          <b-form class="form" @submit='onSubmit' @reset='onReset'>
            <b-form-group id="name">
              <input
                class="input"
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter full name"
              />
            </b-form-group>
            <b-form-group id="email">
              <input
                class="input"
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              />
            </b-form-group>

            <b-form-group id="input-password" label-for="input-password">
              <input
                class="input"
                id="input-password"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
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
  name: 'ViewAdmin',
  components: {
    DashboardLayout
  },
  data () {
    return {
      items: [
        {
          full_name: 'Mansur Ibrahim Nok',
          email_address: 'mansuribrahimnok@gmail.com'
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
