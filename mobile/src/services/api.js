import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.18.2:3333'
   
})

export default api;