import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import DarkModeSwitch from "vue-dark-mode-switch";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  DarkModeSwitch,
  render: (h) => h(App),
}).$mount("#app");
