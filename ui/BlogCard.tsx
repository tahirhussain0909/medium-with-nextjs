"use client";

import { Avatar } from "./Avatar";
import { CustomLink } from "./CustomLink";

type BlogCardTypes = {
  id: number;
  authorName: string;
  publishedDate: string;
  published: boolean;
  title: string;
  content: string;
  subscription: string;
  tagName: string;
  readTime: string;
  selected: string;
};
export const BlogCard = ({
  id,
  authorName,
  publishedDate,
  title,
  content,
  subscription,
  tagName,
  readTime,
  selected,
  published,
}: BlogCardTypes) => {
  return (
    <CustomLink to={`/full-blog/${id}`}>
      <div className="flex justify-center gap-10 items-center p-5 mx-12 mb-12 max-w-[800px] border-b-[1px] cursor-pointer">
        <div className="p-8 w-[32rem] flex flex-col space-y-4 space-x-2">
          <div className="flex items-center space-x-2">
            <Avatar />
            <div>{authorName}</div>
            <span className="ml-1 mr-1 text-slate-400">•</span>
            <div className="text-slate-400">{publishedDate}</div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                fill="#FFD700" // Light yellow
                className="mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <div>{subscription}</div>
          </div>
          <div className="items-center space-y-2">
            <div className="font-extrabold text-xl">{title}</div>
            <div>{content}</div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <div className="rounded-[20px] border bg-slate-100 px-4">
                {tagName}
              </div>
              <div className="text-slate-400">{readTime}</div>
              <span className="ml-1 mr-1 text-slate-400">•</span>
              <div className="text-slate-400">{selected}</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#6B6B6B"
                >
                  <path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" />
                </svg>
              </div>
              <div>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B6B6B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5" />
                </svg>
              </div>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                    fill="#6B6B6B"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10rem]">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg"
            alt="Books"
          />
        </div>
      </div>
    </CustomLink>
  );
};
