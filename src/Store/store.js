import { createStore } from "vuex";
import persistedState from "vuex-persistedstate";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [persistedState()],
});

export default store;
