import axios from 'axios';

const api_tools = axios.create({
    baseURL: process.env.REACT_APP_TOOLS
})

export default api_tools
