import useTodo from '../../../features/todo/model/useTodo'
import TodoInput from '../../../features/todo/ui/TodoInput'
import TodoList from '../../../features/todo/ui/TodoList'
import Card from '../../../shared/ui/card/Card'

const TodoListWidget = () => {
  const { todoList, inputValue, loading, onInputChange, addTodo, toggleTodo, deleteTodo } = useTodo()

  return (
    <Card className="mx-auto w-full max-w-2xl shadow-sm">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">Todo List</h1>
        <TodoInput value={inputValue} loading={loading} onChange={onInputChange} onAdd={addTodo} />
        <TodoList items={todoList} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </Card>
  )
}

export default TodoListWidget
