import type { Todo } from '../../../entities/todo/model/types'
import Button from '../../../shared/ui/button/Button'
import Checkbox from '../../../shared/ui/checkbox/Checkbox'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2">
      <label className="flex min-w-0 flex-1 items-center gap-2">
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} aria-label={`todo-toggle-${todo.id}`} />
        <span className={todo.completed ? 'truncate text-slate-400 line-through' : 'truncate text-slate-800'}>
          {todo.text}
        </span>
      </label>
      <Button danger onClick={() => onDelete(todo.id)} aria-label={`todo-delete-${todo.id}`}>
        Delete
      </Button>
    </li>
  )
}

export default TodoItem
