'use client'
import { Todo } from "@/app/generated/prisma/client"
import { TodoItem } from "./TodoItem"
import { useRouter } from "next/navigation"
import { toggleTodo } from "../actions/todo-action"

interface TodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {

  const router = useRouter()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  )
}
