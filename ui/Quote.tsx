import Link from "next/link";

export const QuoteVersion1 = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center p-12">
      <div className="max-w-[480px] w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            Welcome to our Medium clone
          </h1>
          <p className="text-gray-400">
            Sign up or sign in to start reading and writing articles.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          href="/signin"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export const QuoteVersion2 = () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center p-12">
      <div className="max-w-[480px] w-full space-y-6">
        <div className="space-y-2">
          <p className="font-bold text-3xl">
            "The Customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </p>
          <h1 className="font-bold">Jules Winnfield</h1>
          <h1 className="text-slate-500">CEO, Acme Inc</h1>
        </div>
      </div>
    </div>
  );
};
