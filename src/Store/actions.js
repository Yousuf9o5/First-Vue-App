/*
 * for use $store.dispatch (function name, optional parameter: if we have data to send) and
 * call the mutation commit function like the above one
 */

export default {
  changeTheme(context) {
    context.commit("changeTheme");
  },
  increaseAction(context) {
    context.commit("increase");
  },
  decreaseAction(context) {
    context.commit("decrease");
  },
  logAction(context) {
    context.commit("log");
  },
  logoutAction(context) {
    context.commit("logout");
  },
};
