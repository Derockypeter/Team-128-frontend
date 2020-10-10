<template>
  <div>
    <DashboardLayout>
      <div class="dashboardcon">
        <div class="dashboardlink">
          <router-link to="/tsp/dashboard">Dashboard</router-link> >
          <router-link to="/admin/station">View Schedules</router-link>
        </div>
        <div>
          <button v-b-modal.addSchedule>
            <i class="fa fa-plus" aria-hidden="true"></i> New
          </button>
        </div>
        <div class="table">
          <b-table striped hover :items="items"></b-table>
        </div>
        <b-modal id="addSchedule" title="Create schedule">
          <div id="modal" class="">
            <b-form class="form" @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-from">
                <b-form-select
                  v-model="selected"
                  :options="from"
                ></b-form-select>
              </b-form-group>
              <b-form-group id="input-to">
                <b-form-select
                  v-model="selected"
                  :options="to"
                ></b-form-select>
              </b-form-group>
              <b-form-group id="input-carrier">
                <b-form-select
                  v-model="selected"
                  :options="carrier"
                ></b-form-select>
              </b-form-group>
              <b-form-group id="input-departurTime" label="Departur Time">
                <input
                  class="input"
                  id="input-departurTime"
                  v-model="form.departurTime"
                  type="time"
                  required
                  placeholder="Enter Station name"
                />
              </b-form-group>
              <b-form-group id="input-arrivalTime" label="Arrival Time">
                <input
                  class="input"
                  id="input-arrivalTime"
                  v-model="form.arrivalTime"
                  type="time"
                  required
                  placeholder="Enter Station State"
                />
              </b-form-group>
              <b-form-group id="input-cost">
                <input
                  class="input"
                  id="input-cost"
                  v-model="form.cost"
                  type="number"
                  required
                  placeholder="Enter cost Naira"
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
          from: 'Rigassa station, Kaduna',
          to: 'Abuja Station',
          departur_time: '7:30 AM',
          arrival_time: '8:30 AM',
          carrier: 'C 354',
          cost: 'N2500'
        }
      ],
      selected: null,
      from: [
        { value: null, text: 'Please select a station' },
        { value: 'id', text: 'Kaduna' },
        { value: 'id', text: 'Abuja' }
      ],
      to: [
        { value: null, text: 'Please select a destination' },
        { value: 'id', text: 'Kaduna' },
        { value: 'id', text: 'Abuja' }
      ],
      carrier: [
        { value: null, text: 'Select a carrier' },
        { value: 'id', text: 'C 354' },
        { value: 'id', text: 'C 127' }
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
