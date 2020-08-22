import Axios from "axios";
import { toast } from "react-toastify";

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging Error", error);
    toast.error("An unexpected error occurred, please try again later..");
  }
  return Promise.reject(error);
});

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
