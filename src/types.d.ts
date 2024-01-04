export interface Todo {
  description: string
  importance: 'normal' | 'important' | 'urgent'
  date: string
  done: boolean
  id?: string
}