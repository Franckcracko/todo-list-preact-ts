import { useContext } from "preact/hooks"
import { TodoContext } from "../components/context/TodoContext"

export const useTodo = () => {
  const context = useContext(TodoContext)
  
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  
  return context
}