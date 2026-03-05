import Button from '../../../shared/ui/button/Button'
import Input from '../../../shared/ui/input/Input'
import Spinner from '../../../shared/ui/spinner/Spinner'

type TodoInputProps = {
  value: string
  loading: boolean
  onChange: (value: string) => void
  onAdd: () => void | Promise<void>
}

const TodoInput = ({ value, loading, onChange, onAdd }: TodoInputProps) => {
  const onPressEnter = () => {
    void onAdd()
  }

  return (
    <div className="flex w-full gap-2">
      <Input
        value={value}
        placeholder="Enter a todo"
        onChange={(event) => onChange(event.target.value)}
        onPressEnter={onPressEnter}
        aria-label="todo-input"
      />
      <Button type="primary" onClick={onPressEnter} disabled={loading} aria-label="todo-add-button">
        {loading ? <Spinner /> : 'Add'}
      </Button>
    </div>
  )
}

export default TodoInput
