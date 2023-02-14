<template>
  <div class="row py-2">
    <div class="col-md-6">
      <label>bill no:</label>
      <input
        type="text"
        class="form-control border pt-1"
        placeholder="Bill No:"
        v-model="billnum"
      />
    </div>
    <div class="col-md-6">
      <label>enter a date:</label>
      <input type="date" class="form-control" v-model="date" />
    </div>
  </div>
  <div class="py-2 row">
    <div class="col-md-6">
      <label>transaction type:</label>
      <select class="form-control" v-model="selectedTransaction">
        <option disabled>select type</option>
        <option v-for="(type, index) in transactions" :key="index">
          {{ type.type }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label>transaction category:</label>
      <input
        type="text"
        class="form-control border"
        v-model="TransCategory"
        placeholder="transaction category"
      />
    </div>
  </div>
  <div>
    <label>enter name</label>
    <input type="text" class="form-control border w-100" v-model="particular" />
  </div>
  <div>
    <label>enter amount</label>
    <input type="number" class="form-control border w-100" v-model="amount" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const billnum = ref()
</script>