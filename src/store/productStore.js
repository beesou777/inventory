// imports
import { defineStore } from 'pinia';
import productServices from '../services/productServices';

// creating product store
export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    api:false,
  }),
  actions: {
    async createProduct(data) {
      if (data.product_name && data.rate && data.quantity && data.value !== '') {
       return productServices.createProduct(data)
       .then((res)=>{
        this.products.push(res)
       })
       .catch(error =>{
        console.log(error)
       })
      }
    },

    async getProduct(){
      this.api = true
      return productServices.getProduct()
      .then((res)=>{
        this.products = res
        this.api = false
        localStorage.setItem('product',JSON.stringify(this.products))
      })
      .catch(error =>{
        this.api= false
        console.log(error)
      })
    }
  },
});
