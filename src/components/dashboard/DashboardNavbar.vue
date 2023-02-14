<script setup>
import { ref } from 'vue'
const props = defineProps({
    active: String
})

var inventory = ref(false)
var billEntry = ref(false)

props.active == 'inventory-tab' ? inventory = true : inventory = false
props.active == 'bill-tab' ? billEntry = true : billEntry = false

</script>

<template>
    <div>
        <header>
            <!-- Sidebar -->
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mt-4 text-start">
                        <router-link to="/dashboard/inventory"
                            class="list-group-item list-group-item-action py-2 ripple"
                            v-bind:class="{ active: inventory }" :aria-current="inventory">
                            <i class="fa-solid fa-boxes-stacked"></i><span class="small ms-3">Inventory
                                Management</span>
                        </router-link>
                        <router-link to="/dashboard/bill-management"
                            class="list-group-item list-group-item-action py-2 ripple" v-bind:class="{ active: billEntry }" :aria-current="billEntry" >
                            <i class="fa-solid fa-file-lines"></i><span class="ms-3 small">Bill Entry</span>
                        </router-link>

                    </div>
                </div>
            </nav>
            <!-- Sidebar -->

            <!-- Navbar -->
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <!-- Brand -->
                    <a class="navbar-brand" href="#">
                        <img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/241254360_4242075575913840_6793004530927035651_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Bzmufk-ms98AX8hekrW&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDFlCrTo-CMZvGtg54Ky0ZNkzIgjNKtAT1YQav5ya0rYw&oe=63D25840"
                            height="25" alt="" loading="lazy" />
                    </a>

                    <!-- Right links -->
                    <ul class="navbar-nav ms-auto d-flex flex-row">
                        <!-- Avatar -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                aria-expanded="false">
                                <img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/241254360_4242075575913840_6793004530927035651_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Bzmufk-ms98AX8hekrW&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDFlCrTo-CMZvGtg54Ky0ZNkzIgjNKtAT1YQav5ya0rYw&oe=63D25840"
                                    class="rounded-circle" height="22" alt="" loading="lazy" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">My profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
        </header>
        <!--Main Navigation-->
    </div>
</template>

