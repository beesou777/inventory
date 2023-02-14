<template>
  <DashboardNavbar active="inventory-tab" />

  <!--Main layout-->
  <main style="margin-top: 58px">
    <div class="container p-4">
      <!-- when the btuuon is clicked the required form is shown -->
      <div
        v-if="!inventoryModal && !inventroyCategory"
        class="buttons mb-5 justify-content-end d-flex"
      >
        <button
          type="button"
          class="btn btn-primary btn-primary me-3"
          @click="showInventoryForm"
        >
          Add Inventory
        </button>
        <button
          type="button"
          class="btn btn-primary btn-dark me-3"
          @click="showCategory"
        >
          Add Category
        </button>
      </div>

      <!-- Inventory Data Table Start -->
      <div v-if="!inventoryModal && !inventroyCategory" class="card p-3">
        <InventoryDataTable />
      </div>
      <!-- Inventory Data Table End -->

      <!-- Inventory Form Start -->
      <div v-if="inventoryModal" ref="inventoryModal">
        <AddProduct v-on:updateTable="updateTableData" />
      </div>
      <!-- Inventory Form End -->

      <!-- inventory categoryfrom start here  -->
      <div v-if="inventroyCategory" ref="inventroyCategory">
        <AddCategory v-on:apple="inventroyCategory = !inventroyCategory"/>
      </div>
    </div>
  </main>
</template>

<script setup>
// imports
import { ref,onMounted } from "vue";

/****************************************************/
// importing child components for this page.

// importing inventoryDataTable
import InventoryDataTable from "./inventory/InventoryDataTable.vue";

// AddProduct Form Component
import AddProduct from "./inventory/AddProduct.vue";

// Sidebar component for this page
import DashboardNavbar from "../../components/dashboard/DashboardNavbar.vue";

/****************************************************/
// AddCategory From Component
import AddCategory from "./inventory/AddCategory.vue";

// importing the store to ge the product data
// import { useProductStore } from "../../store/productStore";
// import {useCategroy} from "../../store/categoryStore"
import {useCategroy} from "../../store/categoryStore"
import {useProductStore} from "../../store/productStore"

// initializing boolean to swap the inventory form with the product(inventory) summary page
const category = useCategroy()
// const product = useProductStore()

// if category and product button is clicked 
let inventoryModal = ref(false);
let inventroyCategory = ref(false);

// onMounted(()=>{
//   category.getCategory()
//   product.getProduct()
// })
/****************INVENTORY METHODS START *******************/

// function to display inventory data entry form
function showInventoryForm() {
  inventoryModal.value = true;
  
}


// function to display category form

function showCategory() {
  inventroyCategory.value = true;
}

// update the data and return the state to false

// function to update the data from productStore to the datatable
function updateTableData() { 
 
  // doing this step hides the inventory adding form and display datatable
  inventoryModal.value = false;
}
/****************INVENTORY METHODS END *******************/

// CHECK IF LOGIN IS DONE IF NOT IT WILL AUTOMATICALLY LOGIN AND CREATE AN ACCESS TOKEN


</script>
