import { NextResponse } from "next/server";

import prisma from "@/lib/prisma/prisma";

export async function GET() {
  try {
    await prisma.$connect();
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
