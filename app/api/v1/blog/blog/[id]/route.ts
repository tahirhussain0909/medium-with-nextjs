import { NextRequest, NextResponse } from 'next/server';

import { authMiddleware } from '@/lib/middleware/authMiddleware';
import prisma from '@/lib/prisma/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await authMiddleware(request);
    if (authResult instanceof NextResponse) {
      return authResult; 
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
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

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}