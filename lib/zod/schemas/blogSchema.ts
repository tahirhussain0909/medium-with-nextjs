import { z } from "zod";

export const fetchedBlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  author: z.object({
    name: z.string(),
  }),
});

export const postBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().default(false),
});

export const updateBlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});


export type FetchedBlogTypes = z.infer<typeof fetchedBlogSchema>;
export type PostBlogTypes = z.infer<typeof postBlogSchema>;
