import { CustomLink } from "@/ui/CustomLink";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 flex items-center">
        <section className="w-full py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                    Share Your Voice with the World
                  </h1>
                  <p className="max-w-[600px] text-gray-500 text-base lg:text-lg">
                    Express yourself freely and connect with readers who share
                    your passions. Your unique perspective deserves to be heard.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <CustomLink
                    label="Start Writing"
                    to="/app.paytm.co/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <CustomLink
                    label="Welcome Back"
                    to="/app.paytm.co/signin"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>
              <img
                src="https://cdn-images-1.medium.com/max/1200/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
                alt="Illustration"
                className="mx-auto aspect-video rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
