import { useEffect, useState } from "react";
import axios from "axios";

import { FetchedBlogTypes, PostBlogTypes } from "@/lib/zod/schemas/blogSchema";

export const useBlog = () => {
  const [isLoading, setLoading] = useState(true);
  const [blog, setBlog] = useState<FetchedBlogTypes[]>([
    {
      id: 0,
      title: "",
      content: "",
      published: false,
      author: {
        name: "",
      },
    },
  ]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/bulk`,
      data: blog,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((response) => {
      setBlog(response.data.blogs);
      setLoading(false);
    });
  }, []);

  return {
    isLoading,
    blog,
  };
};

export const useGetBlog = ({ id }: { id: number }) => {
  const [isLoading, setLoading] = useState(true);
  const [blog, setBlog] = useState<PostBlogTypes>();

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/blog/${id}`,
      data: blog,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((response) => {
      setBlog(response.data);
      setLoading(false);
    });
  }, [id]);

  return {
    isLoading,
    blog,
  };
};
