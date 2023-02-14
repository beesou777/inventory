// imports
import { defineStore } from "pinia";
import categoryServices from "../services/categoryServices"

// creating store for category
export const useCategroy = defineStore("categoryStore", {
    state: () => ({
        category:JSON.parse(localStorage.getItem('category')) || null || [],
        // category:[] || null,
        api: false,
    }),
    actions: {
      // function to store category
       async createCategory(data) {
            if(data.category_name != ''){
             return categoryServices.createCategory(data)
             .then((res) =>{
              // localStorage.getItem('access_token')
              this.category.push(res)
             })
             .catch(error =>{
              console.log(error)
              })
            }
        },

        //function to get all category from api 
        async getCategory(){
          this.api = true
          return categoryServices.getCategory()
          .then(res=>{
            this.category = res
            this.api = false
            localStorage.setItem('category',JSON.stringify(this.category))
          })
          .catch(error=>{
            this.api = false
            console.log(error)

          })
        },

        // function to delete the categpry
        async deleteCategory(data){
          return categoryServices.deleteCategory(data)
          .then(res=>{
            this.category = res
          })
          .catch(error=>{
            console.log(error)
          })
        }


}})
