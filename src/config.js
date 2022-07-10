import axios from "axios"
 export const axiosInstance = axios.create({
     baseURL: "https://mernpb-1.herokuapp.com/api"
 })