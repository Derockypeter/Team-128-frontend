import { http } from '../http'
import jwt from 'jsonwebtoken'
import store from '../../store'

export function registerUser (data) {
  return http().post('/register', data)
}

export function loginUser (user) {
  return http().post('/login', user)
    .then(response => {
      if (response.data.status_code === 200) {
        setToken(response.data)
      }
      return response.data
    })
}

function setToken (user) {
  const token = jwt.sign({ user: user }, 'laravellaravelvuevuespaspabuildsdgbuildsdgrailtrailt')
  localStorage.setItem('buildSdgRaitT', token)
  store.dispatch('authenticate_user', user.user)
}

export function isLoggedIn () {
  const token = localStorage.getItem('buildSdgRaitT')
  return token != null
}

export function logoutUser () {
  http().get('/logout')
  localStorage.removeItem('buildSdgRaitT')
}

export function getAccessToken () {
  const token = localStorage.getItem('buildSdgRaitT')
  if (!token) {
    return null
  }

  const tokenData = jwt.decode(token)
  return tokenData.user.access_token
}

export function getProfile () {
  return http().get('/profile')
}
