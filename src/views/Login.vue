<template>
    <section>
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://img.freepik.com/free-vector/accountants-work-with-financial-transactions-software-tablet-enterprise-accounting-it-accounting-system-smart-enterprise-tools-concept-illustration_335657-2101.jpg?w=2000"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-3 ">
        <form @submit.prevent="userLogin">
          <!-- Email input -->
          <div class="mb-4">
            <input placeholder="enter your username" type="text"  class="form-control form-control-lg border border-2 text-dark" v-model="username" />
          </div>

          <!-- Password input -->
          <div class="mb-4">
            <input placeholder="enter your password" type="password" class="form-control form-control-lg border border-2 text-dark" v-model="password"/>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>


        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
// imports
import { ref } from 'vue'
import { useAuthStore } from '../store/authLogin';

// // variables
const username = ref('')
const password = ref('')
const userStore = useAuthStore()

async function userLogin() {
  await userStore.login(username.value,password.value)
}
</script>