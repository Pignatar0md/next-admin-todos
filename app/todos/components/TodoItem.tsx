"use client"
import { Todo } from "@/app/generated/prisma/client"
import styles from "./TodoItem.module.css"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"

interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>

}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex rounded-md p-2 cursor-pointer hover:bg-opacity-60 ${todo.complete ? 'bg-blue-100' : 'bg-red-100'}`}
          onClick={() => toggleTodo(todo.id, !todo.complete)}
        >
          {todo.complete
            ? <IoCheckboxOutline size={30} color="black" />
            : <IoSquareOutline size={30} color="black" />
          }
        </div>
        <div className="text-center sm:text-left text-gray-600">
          {todo.description}
        </div>
      </div>
    </div >
  )
}
