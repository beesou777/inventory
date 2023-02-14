import axios from 'axios';

const accessToken = JSON.parse(localStorage.getItem('access_token'));
axios.defaults.baseURL = 'https://covid.mediaholic.com.np/api/' ;
axios.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';

console.log(axios.defaults.headers.common['Authorization'] )