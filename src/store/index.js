import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    addUsers:[]
  },
  getters: {
  },
  mutations: {
    usersAdd(state, payload) {
      state.users = payload,
      state.addUsers = payload
    },
    filterUsers(state,payload) {
      let body = state.addUsers;
      let search = payload;
      if (!search) state.users = state.addUsers;
      search = search.trim().toLowerCase();
      state.users = body.filter((note) => {
        if (note.name.toLowerCase().indexOf(search) != -1) return note;
      });
    }
  },
  actions: {
    async getUsers({state,commit}) {
      const res = await axios.get("https://63fa073c897af748dcc7e62a.mockapi.io/oficeOne")
      commit("usersAdd", res.data[0].users)
      console.log(res.data);
    }
  },
  modules: {
  }
})
