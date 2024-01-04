import React from "preact/compat"
import { Todo } from "../types"
import { useTodo } from "../hooks/useTodo"
import { useForm } from "../hooks/useForm"
import { IMPORTANCE_VALUES } from "../shared/constants"

const IMPORTANCE_OPTIONS = [
  {
    label: 'Normal',
    value: IMPORTANCE_VALUES.NORMAL,
    color: 'bg-green-500 hover:bg-green-600 has-[:checked]:bg-green-600',
  },
  {
    label: 'Importante',
    value: IMPORTANCE_VALUES.IMPORTANT,
    color: 'bg-yellow-500 hover:bg-yellow-600 has-[:checked]:bg-yellow-600',
  },
  {
    label: 'Urgente',
    value: IMPORTANCE_VALUES.URGENT,
    color: 'bg-red-500 hover:bg-red-600 has-[:checked]:bg-red-600',
  }
]

export const TodoForm = () => {
  const { addTodo } = useTodo()
  const { formValues, changeValue, clearForm } = useForm()

  const handleChange = (evt: React.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const { name, value } = evt.currentTarget
    changeValue({ name, value })
  }

  const handleSubmit = (evt: React.JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    evt.preventDefault()
    addTodo(formValues as Todo)
    clearForm()
  }
  return (
    <form class='grid' onSubmit={handleSubmit}>
      <div class="mb-6">
        <label htmlFor="dexcription" class="text-xs text-black/60 dark:text-white font-bold mb-2">Escribe tu tarea:</label>
        <input onChange={handleChange} value={formValues.description} type="text" name="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
      </div>
      <fieldset class="flex flex-wrap gap-x-4 mb-6">
        <legend class="text-xs text-black/60 dark:text-white font-bold mb-2">Importancia de tu tarea:</legend>
        {
          IMPORTANCE_OPTIONS.map((option) => (
            <label class={`cursor-pointer transition-all has-[:checked]:ring-2 ring-blue-500 dark:ring-blue-100 ${option.color} p-2 px-4 text-xs rounded-full text-white shadow`} >
              {option.label}
              <input
                onChange={handleChange}
                checked={formValues.importance === option.value}
                value={option.value}
                class="hidden"
                type="radio"
                name="importance"
                required />
            </label>
          ))
        }
      </fieldset>
      <div class="grid mb-6">
        <label class="text-xs text-black/60 dark:text-white font-bold mb-2" htmlFor="date">Fecha Límite:</label>
        <input class='rounded-md p-1 px-2 text-black/60 shadow' type="date" name="date" value={formValues.date}  onChange={handleChange} required />
      </div>
      <div class="flex gap-x-4 md:justify-start justify-center">
        <input type="submit" value="Agregar" class="px-6 cursor-pointer inline-flex max-w-28 text-white justify-center p-2 bg-blue-500 hover:bg-blue-600 transition-colors shadow-md rounded-md " />
        <button
          type="button"
          class="px-6 cursor-pointer inline-flex max-w-28 text-white justify-center p-2 bg-red-500 hover:bg-red-600 transition-colors shadow-md rounded-md "
          onClick={() => clearForm()}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}