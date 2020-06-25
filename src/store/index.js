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
    },
    getLinks(state) {
      return state.links;
    }
  },
  actions: {
    deleteLink({ commit }, link) {
      commit("REMOVE_LINK", link);
    },
    addNewLink({ commit }, link) {
      commit("ADD_NEW_LINK", link);
    }
  },
  mutations: {
    REMOVE_LINK(state, link) {
      return (state.links = state.links.filter(lnk => lnk.id !== link.id));
    },
    ADD_NEW_LINK(state, link) {
      const newLink = {
        id: uuidv4(),
        link: link
      };
      return (state.links = [newLink, ...state.links]);
    }
  },
  modules: {}
});
