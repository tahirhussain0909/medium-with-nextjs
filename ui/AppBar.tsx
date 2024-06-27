import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { Avatar } from "./Avatar";

export const AppBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 px-4 justify-between border-b backdrop-blur-md">
      <div className="flex">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href={"#"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" x2="2" y1="6" y2="6" />
            <line x1="22" x2="2" y1="18" y2="18" />
            <line x1="6" x2="6" y1="2" y2="22" />
            <line x1="18" x2="18" y1="2" y2="22" />
          </svg>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <SearchBar />
      </div>
      <div className="flex space-x-5 items-center">
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Write"
          >
            <path
              d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
              fill="currentColor"
            ></path>
            <path
              d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
              stroke="currentColor"
            ></path>
          </svg>
          <Link className="text-muted-foreground text-slate-500" href={"#"}>
            Write
          </Link>
        </div>
        <Link className="font-bold" href={"#"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Notifications"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
        <Avatar />
      </div>
    </header>
  );
};
