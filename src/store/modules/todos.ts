import { Module } from "vuex";
import { State } from "../index";
import { Todo } from "../../types";
import http from "../../api/request";

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
    },
    addTodo(state, todo: Todo) {
      state.todos.push(todo)
    }
  },
  actions: {
    initTodo({commit}) {
      // setTimeout(()=>{
      //   commit('initTodo', [
      //     {
      //       id: 0,
      //       name: '22222',
      //       completed: false
      //     }
      //   ] as Todo[])
      // }, 500)
      http.get<Todo>('/todos/1').then(res => {
        commit('addTodo', res.data)
      })
    },
    addTodo({commit, state}, todoName: string) {
      commit('addTodo', {
        id: state.todos.length + 1,
        title: todoName,
        completed: false
      } as Todo)
    }
  }
} as Module<TodoState, State>