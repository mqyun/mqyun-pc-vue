import axios from '@/axios';
import Vue from 'vue';

const vue = new Vue();

export default {
  // 登录
  async login({ state, commit }, payload) {
    const { account, password, code } = state.loginFormInfo;
    const res = await axios.post('/user/login', {
      account,
      password,
      code,
      key: payload.key
    });
    if (res.code >= 0) {
      commit({
        type: 'SAVE_TOKEN',
        token: res.data.token
      });
      vue.$Message.success("登陆成功");
      setTimeout(() => {
        vue.$jsRouter.replace({
          path: '/home'
        });
      }, 700);
    }
  }
}
