<template>
  <div>
    <DashboardNavbar active="bill-tab" />

    <!--Main layout-->
    <main style="margin-top: 58px">
      <div class="container pt-4">
        <form @submit.prevent>
          <div class="container p-4">
            <div class="d-flex justify-content-between">
              <h3>bill entry system</h3>

              <!-- show buttons component -->
              <showButtons :addItems="addItems" :update-store="updateStore" :deleteItem="deleteItem" :data="data" :clicked="clicked"/>
            </div>

            <div class="w-100">
              <div class="row border-bottom mx-0 pt-1">
                <div class="col text-left ms-2 ">
                  <p>particular</p>
                </div>
                <div class="col text-left">
                  <p>amount</p>
                </div>
              </div>
              <div>
                <!-- pop up form -->
                <div v-if="clicked" class="overlay">
                  <div class="p-5 card">
                    <!-- heading -->
                    <div class="d-flex flex-row justify-content-between">
                      <h3>Enter a new bill</h3>
                      <img
                        class="rounded-5"
                        src="../../assets/logo.webp"
                        style="width: 10%"
                      />
                    </div>

                    <!-- form  -->

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
                        <input
                          type="date"
                          class="form-control"
                          v-model="formattedDate"
                        />
                      </div>
                    </div>
                    <div class="py-2 row">
                      <div class="col-md-6">
                        <label>transaction type:</label>
                        <select
                          class="form-control"
                          v-model="selectedTransaction"
                        >
                          <option disabled>select type</option>
                          <option
                            v-for="(type, index) in transactions"
                            :key="index"
                          >
                            {{ type.type }}
                          </option>
                        </select>
                      </div>

                      <!-- categories selection -->
                      <div class="col-md-6">
                        <label>transaction category:</label>
                        <select
                          class="form-control"
                          v-model="selectedCategory"
                        >
                          <option
                            v-for="(type, index) in categories"
                            :key="index"
                          >
                            {{ type.category }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label>enter name</label>
                      <input
                        type="text"
                        class="form-control border w-100"
                        v-model="particular"
                      />
                    </div>
                    <div>
                      <label>enter amount</label>
                      <input
                        type="number"
                        class="form-control border w-100"
                        v-model="amount"
                      />
                    </div>
                    <button
                      class="
                        my-3
                        border
                        broder-0
                        bg-success
                        rounded-2
                        text-light
                        py-1
                      "
                      @click="addItems"
                    >
                      ADD
                    </button>
                  </div>
                </div>
                <!-- show feild -->
               <FormComponent :selectItem="selectItem" :isSelect="isSelect"  :selectIndex="selectIndex"/>
              </div>
            </div>
          </div>
        </form>
        <!-- if input feild is empty -->
        <EmptyInput  :isEmpty="isEmpty"/>
      </div>
    </main>
  </div>
</template>
<script setup>
// imports
import { onMounted, ref,computed } from "vue";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar.vue";
import { billInventory } from "../../store/billInventory";
import { transactionTypeStore } from "../../store/transactionType";
import { transactionCategoryStore } from "../../store/transactionCategory";
import showButtons from "./billEntry/showButton.vue";
import EmptyInput from "./billEntry/EmptyInput.vue";
import FormComponent from "./billEntry/FormComponent.vue";

// variables
const particular = ref("");
const amount = ref();
const billnum = ref("");
const selectedTransaction = ref("");
const selectedCategory = ref("");
const date = ref(Date.now());
const clicked = ref(false);
const formattedDate = computed(() => new Date(date.value).toISOString().substr(0, 10));


// adding error message
const isEmpty = ref(false);
// store variables
const bill = billInventory();
const data = bill.billStore;
const type = transactionTypeStore();
const category = transactionCategoryStore();

// creating data for transaction type
const transactions = type.transactionType;
const categories = category.transactionCategory

onMounted(() => {
  selectedTransaction.value = "select type";
  selectedCategory.value = "cash";
});

// selection and deletion of selected index
const selectIndex = ref(-1)
const isSelect = ref(false)
function selectItem(index) {
  isSelect.value = !isSelect.value
  selectIndex.value = index
}

function deleteItem(index) {
  if (selectIndex.value >= 0) {
    data.splice(selectIndex.value, 1);
    selectIndex.value = -1;
    isSelect.value = false;
  }
}


// function to add items
function addItems(e) {
  // variables
  if (e.target.innerText === "+") {
    clicked.value = true;
  }

  // if button name/value is add 
  if (e.target.innerText === "ADD") {
    // show empty message if the feild is empty
    if (particular.value.trim() === "" || String(amount.value).trim() === "") {
      isEmpty.value = true;
      setTimeout(() => {
        isEmpty.value = false;
      }, 1000);
      return;
    }

    // add the product when feild is not empty
    if (
      particular.value &&
      amount.value &&
      particular.value.trim() !== "" &&
      String(amount.value).trim() !== ""
    ) {
      // items
      const items = {
        particular: particular.value,
        amount: amount.value,
      };
      // reset the value to empty
      [particular.value, amount.value] = " ";

      //  call from store
      bill.addInventory(items);
    }
    clicked.value = false;
  }
}

// function to add store
function updateStore() {
  
  // select type
  const selectedType = transactions.find(
    (transaction) => transaction.type === selectedTransaction.value
  );

  const selectCategory = categories.find(
    (category) =>category.category === selectedCategory.value
  )


  // value passing
  const billData = {
    bill_No: billnum.value,
    date: date.value,
    transactionType: selectedType,
    transactionCategory: selectCategory,
    transaction: data,
  };
  bill.addTransactions(billData);
}

</script>

<!-- styling -->
<style scoped>

input[type="text"] {
  border: 0;
  outline: none;
}
.card {
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  width: 430px;
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}


.card img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-left: auto;
}



</style>
