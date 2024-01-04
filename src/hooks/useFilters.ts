import { useContext } from "preact/hooks"
import { FiltersContext } from "../components/context/FiltersContext"
import { Todo } from "../types"

export const useFilters = () => {
  const { filters, changeFilters, clearFilters } = useContext(FiltersContext)

  const filtersTodos = (todos: Todo[]) => {
    if (filters === 'ALL') {
      return todos
    }
    
    return todos.filter(todo => {
      if (filters === 'COMPLETED') {
        return todo.done
      }
      return !todo.done
    })
  }

  return { filters, filtersTodos, changeFilters, clearFilters }
}