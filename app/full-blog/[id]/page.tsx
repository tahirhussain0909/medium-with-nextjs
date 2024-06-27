"use client";

import { useParams } from "next/navigation";
import Spinner from "@/ui/Spinner";
import { useGetBlog } from "@/hooks/hooks";
import { AppBar } from "@/ui/AppBar";
import { Avatar } from "@/ui/Avatar";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, blog } = useGetBlog({ id: parseInt(id) });

  if (isLoading) {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <AppBar />
        <div className="flex-grow flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col w-full min-h-screen">
        <AppBar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-red-500">Blog not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <AppBar />
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl mx-auto mt-20">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-5xl font-extrabold">{blog.title}</h1>
          <p className="text-slate-500 pt-2">Posted on 2nd December 2023</p>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
          <h2 className="text-slate-600 text-lg">Author</h2>
          <div className="flex w-full mt-2">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {blog.published || "Anonymous"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
