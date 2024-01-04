export const Footer = () => {
  return (
    <footer class="shadow bg-blue-50 dark:bg-[#0c171f] w-full grid items-center text-center justify-center py-4">
      <p>
        &copy; {new Date().getFullYear()} - Todos los derechos reservados
      </p>
      <p>
        Creado con ❤️ por <a href="https://github.com/Franckcracko/">Franckcracko</a>
      </p>
      <p>
        <a href="https://github.com/Franckcracko/todo-list-typescript" target='_blank'>
          Ver en GitHub
        </a>
      </p>

    </footer>
  )
}