import axios from "axios";

const API = axios.create({
  baseURL: "/api/cars"
});

export default API;
