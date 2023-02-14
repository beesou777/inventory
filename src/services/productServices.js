// imports
import axios from 'axios';


// creating sserviceas for product
class ProductServices {
  async createProduct(data) {
    return axios
      .post('product/', data)
      .then(response => {
          return Promise.resolve(response.data);
      })
      // error handling
      .catch(error => {
        return Promise.reject(error);
      });
  }
  async getProduct(data){
    return axios
    .get('product/', data)
    .then(response => {
        return Promise.resolve(response.data);
    })
    // error handling
    .catch(error => {
      return Promise.reject(error);
    });
  }
}

// export the content
export default new ProductServices();
