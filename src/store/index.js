import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    description: "Keep important links with this app.",
    links: [
      { id: uuidv4(), link: "https://www.google.com" },
      { id: uuidv4(), link: "https://www.amazon.com" },
      { id: uuidv4(), link: "https://www.alibaba.com" },
      { id: uuidv4(), link: "https://www.facebook.com" }
    ]
  },
  getters: {
    getDescription(state) {
      return state.description;
    },
    getLinks(state) {
      return state.links;
    },
    linksNum(state) {
      return state.links.length;
    }
  },
  actions: {
    deleteLink({ commit }, link) {
      commit("REMOVE_LINK", link);
    },
    addNewLink({ commit }, link) {
      commit("ADD_NEW_LINK", link);
    },
    clearLinks({ commit }) {
      commit("REMOVE_ALL");
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
    },
    REMOVE_ALL(state) {
      return (state.links = []);
    }
  },
  modules: {}
});
