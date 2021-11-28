import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export type State = {
  counter: number
}
export const key: InjectionKey<Store<State>> = Symbol()


export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    add(state) {
      state.counter++
    }
  }
})