<template>
  <div
    v-for="(data, index) in data"
    :key="index"
    class="list row"
    @click="selectItem(index)"
    :class="{ 'bg-secondary': isSelect && selectIndex === index, 'bg-light': !isSelect }"
    style="margin: 0 0.1px"
  >
    <div class="col-4 text-left" >
      <p class="pt-3">{{ data.particular }}</p>
    </div>
    <div class="col-4 text-center" style="padding-left: 65px">
      <p class="pt-3">{{ data.amount }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { billInventory } from "../../../store/billInventory";

// store variables
const bill = billInventory();
const data = bill.billStore;


// const isSelect = ref(false)

// allow user to edit items

const props = defineProps({
  deleteItems:Function,
  selectItem:Function,
  isSelect:Boolean,
  selectIndex:{
    type: Number,
    required: true
  },
  data:Array,
  index:Number
})

</script>

<style scoped>
.list{
  border-bottom: 1px solid #ccc;
}
.bg-secondary{
  background: #ccc !important;
}
</style>
