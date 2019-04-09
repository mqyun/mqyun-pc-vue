import axios from '@/axios';

export default {
  // 登录
  async login({ state, commit }) {
    const { account, password } = state.loginFormInfo;
    const res = await axios.post('/user/login', {
      account,
      password
    });
    if (res.code >= 0) {
      commit({
        type: 'SAVE_TOKEN',
        token: res.data.token
      });
    }
  }
}
