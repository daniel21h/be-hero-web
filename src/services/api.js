import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bethehero-server-nodejs.herokuapp.com',
})

export default api