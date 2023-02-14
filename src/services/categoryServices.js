// import axios
import axios from 'axios'

// creating services for category product
class categoryService {
  // function to post category
  async createCategory(data) {
    return axios.post('product-category/', data)
      .then(response => {
       return Promise.resolve(response.data)
      })

      // error handling
      .catch(error => {
        return Promise.reject(error);
      });
  }

  // function to get category from store
  async getCategory(){
    return axios.get('product-category/')
    .then(res =>{
      return Promise.resolve(res.data)
    })
    .catch(error =>{
      return Promise.reject(error)
    })
  }

  // function to delete the category
  async deleteCategory(data){
    return axios.delete('product-category',data)
    .then(res =>{
      return Promise.resolve(res.data)
    })
    .catch(error =>{
      return Promise.reject(error)
    })
  }

}
// export the category
export default new categoryService();
