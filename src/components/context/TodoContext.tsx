import { JSX, createContext } from "preact";
import { Todo } from "../../types";
import { useReducer } from "preact/hooks";
import { INITIAL_STATE, TodoReducer } from "../reducers/todo";


type TodoContextType = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  clearTodos: () => void
  markTodos: () => void
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  deleteTodo: () => { },
  toggleTodo: () => { },
  markTodos: () => { },
  clearTodos: () => { }
})

export const TodoProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE)

  const addTodo = (todo: Todo) => dispatch({ type: "add", payload: todo })

  const clearTodos = () => dispatch({ type: "clear" })

  const deleteTodo = (id: string) => dispatch({ type: "remove", payload: id })

  const toggleTodo = (id: string) => dispatch({ type: "mark", payload: id })

  const markTodos = () => dispatch({ type: "mark_all" })

  return <TodoContext.Provider value={{
    todos: state,
    addTodo,
    clearTodos,
    deleteTodo,
    toggleTodo,
    markTodos
  }}> {children} </TodoContext.Provider>
}

