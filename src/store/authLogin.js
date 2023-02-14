//imports
import { defineStore } from "pinia";
// import router from '@/router/index'
// import AuthService from '../services/authServices'
import axios from "axios";

//store
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('user')) || null,
    accessToken: JSON.parse(localStorage.getItem('access_token')) || null,
    // userDetails: JSON.parse(localStorage.getItem('userDetails')) || null
  }),
  getters: {
    is_auth: (state) => !!state.authUser,
  },
  actions: {
    async login(username, password) {
      await axios.post('user_accounts/login/',{username,password})
      .then(res =>{
        this.authUser = res.data
        localStorage.setItem('user',JSON.stringify(res.data))
        localStorage.setItem('access_token',JSON.stringify(res.data['token']['access']))
      })
      .catch(err =>{
        console.log(err)
      })
    },
 
}})