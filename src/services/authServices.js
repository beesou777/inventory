import axios from 'axios';

class AuthService {
 async login(username,password) {
    return axios.post('user_accounts/login/', {username,password})
      .then(response => {
        const status = response.status
        console.log("thia ia console")
        if (status === 200) {
          return Promise.resolve(response.data);
        } else {
          return Promise.reject(response.data);
        }
      })
      // error handling
      .catch((error) =>{
        console.log("this is error")
        return Promise.resolve(error)

      })
  } 
  // logout() {
  //   localStorage.removeItem('user');
  // }

  // register(user) {
  //   return axios.post('/signup', {
  //     username: user.username,
  //     email: user.email,
  //     password: user.password
  //   });
  // }
}

export default new AuthService();