import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
// import { hash } from "argon2";

import { SignupUserTypes, signupSchema } from "@/lib/zod/schemas/userSchema";
import prisma from "@/lib/prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedbody = signupSchema.safeParse(body);

    if (!parsedbody.success) {
      return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 });
    }

    const { name, email, password }: SignupUserTypes = parsedbody.data;
    // const hashedPassword = await hash(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const token = sign({ id: user.id }, process.env.JWT_SECRET!);

    return NextResponse.json({ token: `Bearer ${token}` }, { status: 200 });
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
