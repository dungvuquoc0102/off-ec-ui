import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function send(method, url, data, config) {
  const res = httpRequest.request({
    method,
    url,
    data,
    ...config,
  });
  return res;
}

httpRequest.interceptors.response.use(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);

const setToken = (token, refresh) => {};

export default httpRequest;
