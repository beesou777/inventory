<template>
  <!--Main layout-->
  <main style="padding-left: 0">
    <div class="">
      <form @submit.prevent>
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <div class="h5">Inventory Items</div>
          </div>
          <hr class="m-0" />
          <div class="my-4">
            <div class="form-group">
              <input type="file" @change="readImage" />
            </div>

            <div class="mb-4">
              <label for="form4Example1"
                >Product Name : <span class="text-danger">*</span></label
              >
              <input
                type="text"
                id="form4Example1"
                class="form-control border border-2"
                v-model="name"
                required
              />
            </div>

            <div class="mb-4">
              <label for="form4Example3"
                >Product Description : <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control border border-2"
                id="form4Example3"
                rows="4"
                v-model="descriptions"
              ></textarea>
            </div>
            <div class="buttons d-flex justify-content-end">
              <input
                type="submit"
                value="add category"
                class="btn btn-dark px-4"
                @click="addCategory"
              />
            </div>
          </div>
        </div>
      </form>
      
    </div>
  </main>
</template>


<script setup>
//imports
import { ref, defineEmits } from "vue";
import { useCategroy } from "../../../store/categoryStore";
import { useProductStore } from "../../../store/productStore";
// import DashboardNavbar from "../../../components/dashboard/DashboardNavbar.vue";

const emit = defineEmits(["apple"]);
//defining variables
const descriptions = ref("");
const name = ref("");

// store
const state = useCategroy();
const productStore = useProductStore();
// console.log(productStore.products["category"])
//add category function
function addCategory() {
  var data = {
    descriptions: descriptions.value,
    name: name.value,
  };
  state.createCategory(data);


  //emptying the feild after the category is added

  emit("apple");
}
</script>
 