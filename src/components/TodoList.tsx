import { useTodo } from "../hooks/useTodo"
import { Todo } from "../types"
import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const { toggleTodo, deleteTodo } = useTodo()
  return (
    <ul class="grid gap-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}