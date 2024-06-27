import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
// import { hash } from "argon2";

import { signinSchema, SigninUserTypes } from "@/lib/zod/schemas/userSchema";
import prisma from "@/lib/prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedbody = signinSchema.safeParse(body);

    if (!parsedbody.success) {
      return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 });
    }

    const { email, password }: SigninUserTypes = parsedbody.data;
    // const hashedPassword = await hash(password);

    await prisma.$connect();

    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

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
