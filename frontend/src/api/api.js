import axios from "axios";

const API = axios.create({
  baseURL: "https://flipr-backend-cqm5.onrender.com/",
});

export default API;
