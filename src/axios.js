import axios from "axios";
import Vue from "vue";

const vue = new Vue();

import store from "./store/index";

axios.interceptors.request.use(config => {
  const token = store.state.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  vue.$Notice.error({
    title: "请求错误"
  });
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  if (response.data.code && response.data.code < 0) {
    switch (response.data.code) {
      case -400:
        vue.$jsRouter.replace({
          path: "/"
        });
        vue.$Message.error("登陆过期，请重新登录");
        break;
      default:
        vue.$Notice.error({
          title: "提示",
          desc: response.data.detail
        });
        break;
    }
  }
  return response.data;
}, error => {
  vue.$Notice.error({
    title: "服务器错误",
    desc: `${error.response.status} ${error.response.statusText}`
  });
  return Promise.reject(error.response);
})

export default axios;
