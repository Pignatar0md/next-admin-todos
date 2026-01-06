"use server"
import prisma from "@/lib/prisma"
import { TodoModel as TodoType } from "@/app/generated/prisma/models/Todo"
import { revalidatePath } from "next/cache"

export const toggleTodo = async (id: string, complete: boolean): Promise<TodoType> => {
  const todo = await prisma.todo.findFirst({ where: { id } })
  if (!todo) {
    throw new Error(`Todo ${id} not found`)
  }
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  })
  revalidatePath("/dashboard/server-todos")
  return updatedTodo
}