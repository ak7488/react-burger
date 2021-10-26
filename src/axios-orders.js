import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-748bf.firebaseio.com/",
});

export default instance;
