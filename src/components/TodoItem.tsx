import { useRef } from "preact/hooks"
import { Todo } from "../types"

const COLORS_IMPORTANCE = {
  urgent: "bg-red-500 hover:bg-red-600",
  important: "bg-yellow-500 hover:bg-yellow-600",
  normal: "bg-green-500 hover:bg-green-600"
}

export const TodoItem = (
  { todo, toggleTodo, deleteTodo }:
    {
      todo: Todo,
      toggleTodo: (id: string) => void
      deleteTodo: (id: string) => void
    }
) => {
  const checkboxRef = useRef<HTMLInputElement>(null)
  return (
    <li class="relative py-2 pl-2 pr-1 rounded-md shadow-md dark:bg-[#11212d] flex flex-wrap gap-x-2" >
      <div class="flex items-center mr-2">
        <label htmlFor="completed " class="group cursor-pointer"  >
          <input
            name="completed"
            type="checkbox"
            onChange={() => toggleTodo(todo.id ?? '')}
            checked={todo.done}
            class="sr-only"
            ref={checkboxRef}
          />
          <button onClick={() => checkboxRef.current?.click()} class="size-full group-has-[:checked]:hover:bg-blue-600 group-has-[:checked]:bg-blue-500 rounded-full p-1 ring ring-blue-500  group-hover:bg-blue-500 transition-colors ">
            <svg class="size-4 group-hover:text-white group-has-[:checked]:text-white" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </button>
        </label>
      </div>
      <div class="flex-1">
        <h2 class="text-lg mb-1">{todo.description}</h2>
        <h4 class="inline-block mr-4 mb-3 text-xs text-gray-500 ">{todo.date}</h4>
        <span class={` p-1 px-2 rounded-full ${COLORS_IMPORTANCE[todo.importance]} transition-colors shadow select-none text-[0.5rem]`}>{todo.importance}</span>
      </div>
      <button
        class="absolute top-2 right-4 hover:text-red-600 text-base"
        onClick={() => deleteTodo(todo.id ?? '')}
      >
        x
      </button>
    </li>
  )
}