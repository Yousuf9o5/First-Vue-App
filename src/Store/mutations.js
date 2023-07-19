/*
 * for use $store.commit(function name)
 */

export default {
  changeTheme(state) {
    if (state.theme === "light") {
      state.theme = "dark";
    } else {
      state.theme = "light";
    }
  },
  increase(state) {
    state.counter++;
  },
  decrease(state) {
    state.counter--;
  },
  log(state) {
    state.login === true;
  },
  logout(state) {
    state.login === false;
  },
};
