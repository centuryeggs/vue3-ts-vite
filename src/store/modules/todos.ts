import { Module } from "vuex";
import { State } from "../index";
import { Todo } from "../../types";

const initialState = {
  todos: [] as Todo[]
}
export type TodoState = typeof initialState

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, todos: Todo[]) {
      state.todos = todos
    }
  },
  actions: {
    initTodo({commit}) {
      setTimeout(()=>{
        commit('initTodo', [
          {
            id: 0,
            name: '22222',
            completed: false
          }
        ])
      }, 500)
    }
  }
} as Module<TodoState, State>