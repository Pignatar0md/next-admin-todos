import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {

  await prisma.todo.deleteMany();
  await prisma.todo.createMany({
    data: [
      {
        description: "Do the shopping",
        complete: false,
      },
      {
        description: "Study everyday nextjs",
        complete: true,
      },
      {
        description: "Walk with the dog",
        complete: true,
      },
      {
        description: "Clean the house",
        complete: false,
      },
    ],
  });
//   await prisma.todo.create({
//     data: {
//       description: "Study everyday nextjs",
//       complete: true,
//     },
//   });
  return NextResponse.json({ message: "db filled" });
}
