import { defineStore } from 'pinia';

// creating product store
export const transactionTypeStore = defineStore('transactionType', {
  state: () => ({
    transactionType: [
        {type: "cash" },
        {type: "card" }
    ],
  }),
});
