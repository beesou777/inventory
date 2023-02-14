import { defineStore } from 'pinia';

// creating product store
export const transactionCategoryStore = defineStore('transactionCategory', {
  state: () => ({
    transactionCategory: [
      {category: "cashin" },
        {category: "cashout"},
        {category: "cheque"},
        {category: "cash"},
        {category: "mm"},
        {category: "phonepay"},
        {category: "laundry"},
    ],
  }),
});
