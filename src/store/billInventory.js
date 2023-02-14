import { defineStore } from 'pinia';
import productServices from '../services/productServices';

// creating product store
export const billInventory = defineStore('productStore', {
  state: () => ({
    billStore: [],
    transactions:[]
  }),
  actions: {
     addInventory(items) {
        if(items != " "){
          this.billStore.push(items)
        }
      },
      deleteInventory(index){
        this.billStore.splice(index,1)
      },
      addTransactions(billData){
        this.transactions.push(billData)
      }
  },
});
