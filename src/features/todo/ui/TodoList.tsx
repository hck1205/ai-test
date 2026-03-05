import type { Todo } from '../../../entities/todo/model/types'
import TodoItem from './TodoItem'

type TodoListProps = {
  items: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoList = ({ items, onToggle, onDelete }: TodoListProps) => {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500">
        No todos yet.
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2" aria-label="todo-list">
      {items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList
