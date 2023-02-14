<template>
  <DashboardNavbar active="inventory-tab" />
  <main style="margin-top: 58px">
    <div class="container p-3">
      <h3 class="text-center mt-2">Category Table Data</h3>
      <table class="table shadow">
        <thead>
          <tr class="text-center">
            <th>Title</th>
            <th>Description</th>
            <!-- <th>Images</th> -->
            <th class="text-center">actions</th>
          </tr>
        </thead>
        <tbody v-if="cat.length != 0">
          <tr v-for="(item, index) in cat" :key="index" class="text-center">
            <td>{{ item.name }}</td>
            <td>{{ item.descriptions }}</td>
            <!-- <td><img :src="item.image" /></td> -->
            <td class="text-center">
              <button
                class="btn bg-danger text-light"
                @click="delteCategory(index)"
              >
                remove
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-if="cat.length === 0">
          <tr>
            <p class="text-center">
              no category to show add category to show here
            </p>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
  
<script setup>
// imports
import { useCategroy } from "../../../store/categoryStore";
import DashboardNavbar from "../../../components/dashboard/DashboardNavbar.vue";
import { onMounted, watch } from "@vue/runtime-core";

// variables

const categories = useCategroy();
var cat = categories.category;

// load the category on page load
onMounted(() => {
   cat =  categories.getCategory()
});

// function to delete categroy list items
function delteCategory() {
  category.deleteCategory();
}

// edit he categorylist
</script>
  
<style scoped>
td {
  max-width: 100px;
  overflow-y: hidden;
}
td::-webkit-scrollbar {
  height: 3px;
  border-radius: 8px;
}

td::-webkit-scrollbar-thumb {
  background-color: #a38f8f;
}

td::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>