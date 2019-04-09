import * as type from './mutations-type';

export default {
  [type.SAVE_TOKEN](state, payload) {
    state.token = payload.token;
  }
}
