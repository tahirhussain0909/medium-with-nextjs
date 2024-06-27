"use client";

import { AppBar } from "@/ui/AppBar";
import { BlogCard } from "@/ui/BlogCard";
import { BlogSkeleton } from "@/ui/BlogSkeleton";
import { useBlog } from "@/hooks/hooks";

export default function Page() {
  const { isLoading, blog } = useBlog();

  if (isLoading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center mt-32">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <AppBar />
      <div className="flex flex-col items-center mt-14">
        {blog && blog.length > 0 ? (
          <div className="border-x-[1px] ">
            <div className="flex items-center border-b-[1px] max-w-[800px] p-5 mx-12 space-x-5">
              <div>
                <svg width="19" height="19" className="hover:bg-slate-200">
                  <path
                    d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>For you</div>
              <div>Following</div>
              <div>Programming</div>
            </div>
            {blog.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name}
                publishedDate="Jun 13 2024"
                title={blog.title}
                content={blog.content}
                published={blog.published}
                subscription="Member Only"
                tagName="Side Hustle"
                readTime="2 min read"
                selected="Selected for you"
              />
            ))}
          </div>
        ) : (
          <div className="flex h-[800px] items-center justify-center text-4xl font-semibold">
            No Blog Posts Found
          </div>
        )}
      </div>
    </div>
  );
}
