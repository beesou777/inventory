import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import DashboardHome from "../views/dashboard/DashboardHome.vue";
import Inventory from "../views/dashboard/Inventory.vue";
import BillEntry from "../views/dashboard/BillEntry.vue";
import categoryTable from "../views/dashboard/inventory/CategoryTable.vue"

const routes = [
  { path: "/", name: "home", component: Home, },
  { path: "/login", name: "login", component: Login, },
  { path: "/dashboard", name: "dashboard", component: DashboardHome, },
  { path: "/dashboard/inventory", name: "inventory", component: Inventory, },
  { path: "/dashboard/bill-management", name: "bill-management", component: BillEntry, },
  { path: "/dashboard/inventory/category-table", name: "category-table", component: categoryTable, },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
