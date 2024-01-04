import { TodoForm } from "./TodoForm"
import { Todos } from "./Todos"
import { FiltersProvider } from "./context/FiltersContext"

export const Todo = () => {
  return (
    <section class='flex justify-center items-center mb-12'>
      <div class="max-w-6xl grid gap-y-8 max-sm:p-4">
        <TodoForm />
        <FiltersProvider>
          <Todos />
        </FiltersProvider>
      </div>
    </section>
  )
}