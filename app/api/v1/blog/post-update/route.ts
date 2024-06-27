import { NextRequest, NextResponse } from "next/server";

import { updateBlogSchema } from "@/lib/zod/schemas/blogSchema";
import prisma from "@/lib/prisma/prisma";

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = updateBlogSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { message: "Inputs not correct" },
        { status: 411 }
      );
    }

    const { id, title, content } = parseResult.data;

    await prisma.$connect();
    const blog = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json({ id: blog.id }, { status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
