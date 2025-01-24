import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export default Api;
