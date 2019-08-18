import Vue from 'vue'
import Vuex from 'vuex'
import app, { AppState } from './modules/app'

interface RootState {
  app: AppState
}

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: {
    app,
  },
  getters: undefined,
})
