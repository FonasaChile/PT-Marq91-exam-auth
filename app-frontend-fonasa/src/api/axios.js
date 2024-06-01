import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Auth-Token, Origin, Authorization",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Expose-Headers": "Authorization",
    'Content-Type': 'application/json'
  }
})

export default instance