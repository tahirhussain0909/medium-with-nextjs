import { z } from "zod";

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignupUserTypes = z.infer<typeof signupSchema>;
export type SigninUserTypes = z.infer<typeof signinSchema>;
