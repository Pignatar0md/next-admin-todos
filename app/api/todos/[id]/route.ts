import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import * as yup from "yup"

const findTodo = async (id: string) => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  })
  if (!todo) {
    return null
  }
  return todo
}

const validateId = async (id: string) => {
  if (!id) {
    return NextResponse.json({ error: "Invalid id parameter" }, { status: 400 })
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params
  validateId(id)
  const todo = await findTodo(id)

  return todo ? NextResponse.json({ todo }) : NextResponse.json({ error: `Todo ${id} not found` }, { status: 404 })
}

const putSchema = yup.object().shape({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
})

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try{
    const { id } = await params
    validateId(id)
    const todo = await findTodo(id)
    if (!todo) {
      return NextResponse.json({ error: `Todo ${id} not found` }, { status: 404 })
    }
    const body = await request.json()
    const { description, complete } = await putSchema.validate(body)

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    })
    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json({ error: "Invalid body", details: error }, { status: 400 })
  }
}