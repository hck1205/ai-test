import { useAtom } from 'jotai'
import { createTodo } from '../../../entities/todo/api/todo.api'
import { inputValueAtom, loadingAtom, todoListAtom } from '../../../entities/todo/model/todo.state'

const useTodo = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom)
  const [inputValue, setInputValue] = useAtom(inputValueAtom)
  const [loading, setLoading] = useAtom(loadingAtom)

  const onInputChange = (value: string) => {
    setInputValue(value)
  }

  const addTodo = async () => {
    const text = inputValue.trim()

    if (!text) {
      return
    }

    setLoading(true)

    try {
      const created = await createTodo(text)
      setTodoList((prev) => [created, ...prev])
      setInputValue('')
    } finally {
      setLoading(false)
    }
  }

  const toggleTodo = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    )
  }

  const deleteTodo = (id: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  return {
    todoList,
    inputValue,
    loading,
    onInputChange,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
}

export default useTodo
