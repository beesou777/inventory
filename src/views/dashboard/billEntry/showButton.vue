<template>
  <div class="d-flex mb-3">
    <button class="btn bg-success text-light" type="submit" @click="addItems">
      {{ clicked ? "add" : "+" }}
    </button>
    <button
        @click="deleteItem(index)"
        class="
          bg-danger
          border border-0
          rounded-1
          px-4  
          text-light
          ms-2
        "
      >
        Delete
      </button>
    <button class="btn btn-primary ms-2" @click="updateStore">update</button>
  </div>
</template>

<script setup>
// imports

// define props to pass function
const props = defineProps({
  addItems: Function,
  updateStore: Function,
  deleteItem:Function,
  index:Number,
  clicked:Boolean

});

</script>