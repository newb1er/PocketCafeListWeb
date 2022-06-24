import axios from 'axios'

const api = axios.create({
    baseURL: 'https://1b90-122-116-174-121.jp.ngrok.io/'
})

export default api