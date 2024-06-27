import { NextRequest, NextResponse } from "next/server";
import { PostBlogTypes, postBlogSchema } from "@/lib/zod/schemas/blogSchema";
import prisma from "@/lib/prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedBody = postBlogSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { message: "Invalid inputs", errors: parsedBody.error.errors },
        { status: 400 }
      );
    }

    const { title, content, published }: PostBlogTypes = parsedBody.data;
    const authorIdNumber = request.headers.get("x-user-id");

    console.log("Author ID from header:", authorIdNumber);

    if (!authorIdNumber) {
      return NextResponse.json(
        { message: "Unauthorized: Author ID not found" },
        { status: 401 }
      );
    }

    const authorId = parseInt(authorIdNumber);

    if (isNaN(authorId)) {
      return NextResponse.json(
        { message: "Invalid Author ID" },
        { status: 400 }
      );
    }

    console.log("Parsed Author ID:", authorId);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId,
      },
    });

    return NextResponse.json(
      {
        message: "Blog post created successfully",
        postId: post.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { message: "An error occurred while creating the blog post" },
      { status: 500 }
    );
  }
}
