//external modules
import axios from "axios";

const connection = axios.create({
  baseURL: "https://api.github.com/users/",
});

export default connection;