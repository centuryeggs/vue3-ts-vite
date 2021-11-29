import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import todos, { TodoState } from "./modules/todos"
export type State = {
  counter: number,
  todos?: TodoState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    counter: 0
  },
  mutations: {
    add(state) {
      state.counter++
    }
  },
  modules: {
    todos
  }
})

export function useStore() {
  return baseUseStore(key)
}