import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "A simple app with vue and vuex",
    links: [
      { id: uuidv4(), link: "https://www.google.com" },
      { id: uuidv4(), link: "https://www.amazon.com" },
      { id: uuidv4(), link: "https://www.alibaba.com" },
      { id: uuidv4(), link: "https://www.facebook.com" }
    ]
  },
  getters: {
    getTitle(state) {
      return state.title;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
