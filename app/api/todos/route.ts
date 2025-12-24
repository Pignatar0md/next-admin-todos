import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import * as yup from "yup"

const postSchema = yup.object().shape({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
})

export async function GET(request: NextRequest) {
    const params = new URL(request.url)
    const take = Number(params.searchParams.get("take")) ?? 10
    const skip = Number(params.searchParams.get("skip")) ?? 0
    if (isNaN(take) || isNaN(skip)) {
        return NextResponse.json({ error: "Invalid take or skip parameter" }, { status: 400 })
    }
    const todos = await prisma.todo.findMany({ take, skip })
  return NextResponse.json(todos)
}

export async function POST(request: NextRequest) {
  try{
    const body = await request.json()
    const { description, complete } = await postSchema.validate(body)
    const todo = await prisma.todo.create({
      data: { description, complete },
    })
    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json({ error: "Invalid body", details: error }, { status: 400 })
  }
}