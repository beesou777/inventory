<template>
  <!-- Heading Section Start -->
  <div class="d-flex justify-content-between">
    <div class="h5 pt-3">Inventory Items</div>
    <div class="mb-3">
      <button @click="login" class="btn bg-primary text-light">login</button>
      <router-link to="/dashboard/inventory/category-table">
        <button class="btn bg-success text-light ms-3">show category</button>
      </router-link>
    </div>
  </div>
  <!-- Heading Section End -->
  <hr class="m-0" />
  <div class="my-4">
    <!-- Data Table Operations Button start -->
    <div
      class="d-flex data-tables-primary-buttons mb-4 justify-content-end w-100"
    >
      <!-- Add New Button -->
      <button @click="addData()" class="btn btn-sm btn-primary me-3">
        <i class="fa-solid fa-plus me-2"></i> New
      </button>

      <!-- Edit Button -->
      <button @click="updateData()" class="btn btn-sm btn-secondary me-3">
        Edit
      </button>

      <!-- Delete Button -->
      <button @click="removeData" class="btn btn-sm btn-danger me-3">
        Delete
      </button>
    </div>
    <!-- Data Table Operation Button End -->

    <!-- Data Table Start -->
    <DataTable
      class="display"
      :columns="column"
      :options="options"
      :data="data"
      ref="table"
    />

    <!-- Data Table End -->
  </div>
</template>


<script setup>
// imports
import { ref, onMounted, computed } from "vue";
import {useAuthStore} from "../../../store/authLogin"
import {useProductStore} from "../../../store/productStore"

/****************************************************/

// importing the store to ge the product data
// importing the store to ge the product data
// import { useProductStore } from "../../../store/productStore";
/****************DATA TABLES CONFIGURATION START *******************/

// DataTables and its dependencies
import DataTableServices from "../../../services/dataTable.services";
import { DataTable, DataTablesLib } from "../../../common";
import "datatables.net-select";
import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.html5";

// Init usage of DataTableLib
DataTable.use(DataTablesLib);

// defining store
const product = useProductStore()
// store data
var data =  ref([]);

// const dat = product.products

// data.value.push(dat)
// console.log(data.value)

// initializing variables for using in datables
let dt;
const table = ref();

const column = [
  { title: "Product Name", data: "product_name" },
  { title: "Quantity", data: "quantity" },
  { title: "Rate", data: "rate" },
  { title: "Value", data: "value" },
];

// options configurations for datatables
const options = { dom: "Blftipr", select: true, ordering: false, info: true, buttons: [
    {
      extend: "csv",
      text: "CSV",
      className: "btn bg-light rounded-1 text-dark border border-1 shadow"
    },
    {
      extend: "copyHtml5",
      text: "Copy",
      className: "btn mx-2 rounded-1 bg-light text-dark border border-1 shadow"
    },

  ]};

/****************DATA TABLES CONFIGURATION END *******************/

// testing purpose
function login(){
  const username = "admin"
  const password = "admin"
  const auth = useAuthStore()
  auth.login(username,password)
}

// });

// remove data on delete
</script>

<style>
@import "datatables.net-buttons-dt";
@import "datatables.net-select-dt";
@import "datatables.net-dt";
</style>

<style scoped>
.btns{
  background: red;
}
</style>