"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { SignupUserTypes } from "@/lib/zod/schemas/userSchema";
import { InputBox } from "@/ui/InputBox";
import { QuoteVersion2 } from "@/ui/Quote";
import { Button } from "@/ui/Button";
import { CustomLink } from "@/ui/CustomLink";
import Spinner from "@/ui/Spinner";

export default function SignupForm() {
  const [postInputs, setPostInputs] = useState<SignupUserTypes>({
    name: "",
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
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signup`,
        data: postInputs,
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
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
        {isLoading && <Spinner />}
        <QuoteVersion2 />
        <div className="flex flex-col justify-center items-center p-12 bg-white">
          <div className="max-w-[480px] w-full space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-black">Sign Up</h1>
              <p className="text-gray-600">
                Already have an account?{" "}
                <CustomLink
                  label="Sign in"
                  to="/signin"
                  className="font-medium text-black hover:underline"
                />
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleEvent}>
              <InputBox
                id="name"
                label="Name"
                placeholder="John Doe"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
              <InputBox
                id="email"
                label="Email"
                placeholder="m@example.com"
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
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <Button label="Sign Up" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
