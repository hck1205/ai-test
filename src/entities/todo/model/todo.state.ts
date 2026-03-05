import { atom } from 'jotai'
import type { Todo } from './types'

export const todoListAtom = atom<Todo[]>([])
export const inputValueAtom = atom<string>('')
export const loadingAtom = atom<boolean>(false)
