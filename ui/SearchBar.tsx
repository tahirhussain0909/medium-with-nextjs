export const SearchBar = () => {
  return (
    <div className="flex justify-center py-6">
      <div className="relative w-full max-w-md">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-full border border-muted px-4 py-2 pr-10 text-sm focus:border-primary focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};
