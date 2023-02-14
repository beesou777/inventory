<template>
  <div class="container">
    <form @submit.prevent>
      <div class="card p-3">
        <div class="my-4">
          <!-- Name input -->
          <div class="mb-4">
            <label>Product Name: <span class="text-danger">*</span></label>
            <input type="text" class="form-control border border-2" v-model="particular_name"
              required />
          </div>

          <!-- Email input -->
          <div class="mb-4">
            <label>Enter Quantity : <span class="text-danger">*</span></label>
            <input type="number" class="form-control border border-2" v-model="quantity" required />
          </div>

          <div class="mb-4">
            <label>Enter Rate : <span class="text-danger">*</span></label>
            <input type="number" class="form-control border border-2" v-model="rate" required />
          </div>

          <div class="form-group" v-if="isProduct">
            <label for="productCategory">Product Category:</label>
            <select class="form-control" id="productCategory" v-model="selectedCategoryId">
              <option v-for="(category, index) in categoryStore" :key="index"  :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="mb-4" v-if="!isProduct">
            <label>Product Category : </label>
            <input type="text" class="form-control border border-2" v-model="pine" required />
          </div>

          
          <div class="buttons d-flex justify-content-end">
            <input type="submit" value="Add Item" class="btn btn-primary mt-2" @click="addProduct" />
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script setup>


//imports
import { ref} from "vue";
import { useProductStore } from "../../../store/productStore";
import { useCategroy } from "../../../store/categoryStore";

// defining emits
const emit = defineEmits(['updateTable'])

//defininig variables
const particular_name = ref("");
const quantity = ref();
const rate = ref();
const value = ref();
const selectedCategoryId = ref(null)
const pine = ref('')
//store 
const stateProduct = useProductStore();
const useStore = useCategroy();
const categoryStore = useStore.category
console.log(categoryStore)

const isProduct = categoryStore.length > 0

// adding product 
const addProduct = () => {
// find the user selected option 
  const selectedCategory = categoryStore.find((category) => category.id === selectedCategoryId.value);

  // if product category is there
 if (isProduct){
  var data = {
    particular_name: particular_name.value,
    quantity: quantity.value,
    rate: rate.value,
    value: quantity.value * rate.value,
    category: {
      category_name: selectedCategory.category_name ,
      category_description: selectedCategory.category_description
    },
  };
 }

//  if category is not there
 if(!isProduct){
  var data = {
    particular_name: particular_name.value,
    quantity: quantity.value,
    rate: rate.value,
    value: quantity.value * rate.value,
    category:{
      category_name:pine.value,
      category_description:null
    }
  };
 }


  stateProduct.createProduct(data);
  emit("updateTable");
};

</script>



































