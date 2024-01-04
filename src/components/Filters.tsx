import { useFilters } from "../hooks/useFilters"
import { useTodo } from "../hooks/useTodo"
import { statesTodo } from "./reducers/filters"

const ITEM_FILTERS = [
  {
    value: "ALL",
    label: "Todos",
    id: "orderByAll"
  },
  {
    value: "COMPLETED",
    label: "Completados",
    id: "orderByCompleted"
  },
  {
    value: "UNCOMPLETED",
    label: "Incompletos",
    id: "orderByUncompleted"
  }
]

export const Filters = () => {
  const { changeFilters, filters } = useFilters()
  const { markTodos, clearTodos } = useTodo()
  return (
    <fieldset class="mb-4">
      <legend class="font-bold border-b border-gray-300/40 pb-1 mb-6 w-4/5 ">Filtros</legend>

      <div class="flex flex-wrap items-center mr-3 mb-4">
        <h2 class="text-normal mr-4">Ordenar por:</h2>
        {
          ITEM_FILTERS.map(item => (
            <div class="flex gap-x-1 mr-4" key={item.id}>
              <input id={item.id} checked={item.value === filters} onChange={() => { changeFilters(item.value as statesTodo) }} type="radio" name="order" value={item.value} />
              <label htmlFor={item.id} class="text-sm font-medium text-gray-900 dark:text-gray-300">
                {item.label}
              </label>
            </div>
          ))
        }
      </div>
      <div class="flex gap-x-4">
        <button onClick={() => markTodos()} class="flex-1 text-xs p-2 text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow rounded-md mr-4">Marcar Todos</button>
        <button onClick={() => clearTodos()} class="flex-1 text-xs p-2 text-white bg-red-500 hover:bg-red-600 transition-colors shadow rounded-md">Eliminar Tareas Completadas</button>
      </div>
    </fieldset>
  )
}