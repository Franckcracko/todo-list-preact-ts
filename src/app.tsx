import './app.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Todo } from './components/Todo'
import { TodoProvider } from './components/context/TodoContext'

export function App() {

  return (
    <>
      <Header />
      <TodoProvider>
        <main class="mb-16">
          <Todo />
        </main>
      </TodoProvider>
      <Footer />
    </>
  )
}
