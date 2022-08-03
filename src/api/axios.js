import Axios from "axios";

const userInfo = localStorage.getItem("userInfo") || null;

let headers = {
    "Content-Type": "application/json",
  },
  baseURL = "https://reqres.in/api/";

if (userInfo) {
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(userInfo).token}`,
  };
}

export const axios = Axios.create({ baseURL, headers });
