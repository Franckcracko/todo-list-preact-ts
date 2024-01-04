import { useFilters } from "../hooks/useFilters"
import { useTodo } from "../hooks/useTodo"
import { Filters } from "./Filters"
import { TodoList } from "./TodoList"

export const Todos = () => {
  const { filtersTodos } = useFilters()
  const { todos } = useTodo()
  const filteredTodos = filtersTodos(todos)
  return (
    <section>
      <Filters />
      <TodoList todos={filteredTodos} />
    </section>
  )
}