import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2641ed2f51a3a72d6f2c6abe10304fd479802c1c3ba526ce01038f53de3300a9',        
  }
});