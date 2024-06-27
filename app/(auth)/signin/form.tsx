"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { SigninUserTypes } from "@/lib/zod/schemas/userSchema";
import { InputBox } from "@/ui/InputBox";
import { Button } from "@/ui/Button";
import { CustomLink } from "@/ui/CustomLink";
import Spinner from "@/ui/Spinner";


export default function SigninForm() {
  const [postInputs, setPostInputs] = useState<SigninUserTypes>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleEvent = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signin`,
        data: postInputs,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      router.push("/blogs");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      {isLoading && <Spinner />}
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <CustomLink
              label="Sign up"
              to="/signup"
              className="font-medium text-black hover:underline"
            />
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleEvent}>
          <InputBox
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <InputBox
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <Button label="Sign in" type="submit" />
        </form>
      </div>
    </div>
  );
}