import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-c4551/us-central1/api"   //API ClOUD FUNCTION URL
})
export default instance;