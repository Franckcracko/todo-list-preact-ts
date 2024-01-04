import { Todo } from "../../types";

export const INITIAL_STATE: Todo[] = JSON.parse(localStorage.getItem("todos")!) || [];

type ACTIONTYPE =
  | { type: "add", payload: Todo }
  | { type: "remove", payload: string }
  | { type: "mark", payload: string }
  | { type: "clear" }
  | { type: "mark_all" }

export function TodoReducer(state: Todo[], action: ACTIONTYPE) {
  let newState: Todo[] = []
  switch (action.type) {
    case "add":
      const { date, description, done, importance } = action.payload
      const newTodo = { date, description, done, importance, id: crypto.randomUUID() }
      newState = [...state, newTodo]
      localStorage.setItem("todos", JSON.stringify(newState))
      return newState
    case "remove":
      newState = state.filter((todo) => todo.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(newState))
      return newState
    case "clear":
      newState = state.filter((todo) => !todo.done)
      localStorage.setItem("todos", JSON.stringify(newState))
      return newState
    case "mark":
      newState = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
      localStorage.setItem("todos", JSON.stringify(newState))
      return newState

    case "mark_all":
      if (state.every((todo) => todo.done)) {
        newState = state.map((todo) => {
          return { ...todo, done: false }
        })
        localStorage.setItem("todos", JSON.stringify(newState))
        return newState
      }
      newState = state.map((todo) => {
        return { ...todo, done: true }
      })
      localStorage.setItem("todos", JSON.stringify(newState))
      return newState
  }
}