import type { Todo } from '../model/types'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const createTodo = async (text: string): Promise<Todo> => {
  await sleep(120)

  return {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
  }
}
