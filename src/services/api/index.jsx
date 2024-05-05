import axios from "axios";
import config from "config";
import { useState } from "react";
import storage from "services/storage";

const api = axios.create({
  baseURL: "https://hisobot.pythonanywhere.com",
  timeout: 7000,
  timeoutErrorMessage: "timeout"
});

const RefreshToken = localStorage.getItem("refresh-token")
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

api.interceptors.request.use(
  (configs) => {

    const token = storage.get("token") || "";
    if (token) {
      configs.headers.Authorization = `Bearer ${token}`;
    }
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      api.post('/user/refresh/', { refresh: RefreshToken }).then((data) => {
        localStorage.setItem("token", data.data.access)
        localStorage.setItem("refresh-token", data.data.refresh)
      })
    }
    return Promise.reject(error);
  }
);

export default api;