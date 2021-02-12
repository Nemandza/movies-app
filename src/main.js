import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'


Vue.config.productionTip = false;

//Vue.use(SharedPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    activeUser: null,
  },

  getters: {
    counter: (state) => state.counter
  },

  mutations: {
    incrementCounter (state)  {
      state.counter++;
    },
    setActiveUser(state, activeUser) {
      state.activeUser = activeUser;
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
