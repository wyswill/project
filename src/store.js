import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: [],
    user_info: {},
    class: []
  },
  mutations: {
    add_postition(state, data) {
      state.position.push(data);
    },
    login(state, data) {
      state.user_info = data;
    },
    addClass(state, data) {
      state.class.push(data);
    }
  },
  actions: {
    add_postition(ctx, data) {
      ctx.commit("add_postition", data);
    },
    login(ctx, data) {
      ctx.commit("login", data);
    },
    addClass(ctx, data) {
      ctx.commit("addClass", data);
    }
  }
});
