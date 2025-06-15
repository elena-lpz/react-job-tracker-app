export default function Dashboard() {
  return (
    <main className="mx-3 md:mx-8 mt-8 flex flex-col min-h-screen">
      <h1 className="px-2 text-2xl font-semibold">Welcome back!</h1>

      {/* quick summary  */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
        <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
          <p className="text-md md:text-xl font-semibold max-w-min rounded-xl px-4 py-2 bg-[var(--pink-accent)] mb-3">
            {1}
          </p>
          <p className="text-lg md:text-xl text-gray-500 ">
            Total applications
          </p>
        </div>

        <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
          <p className="text-md md:text-xl font-semibold max-w-min rounded-xl px-4 py-2 bg-[var(--yellow-accent)] mb-3">
            {1}
          </p>
          <p className="text-lg md:text-xl text-gray-500 ">
            Upcoming Interviews
          </p>
        </div>

        <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
          <p className="text-md md:text-xl font-semibold max-w-min rounded-xl px-4 py-2 bg-[var(--green-accent)] mb-3">
            {1}
          </p>
          <p className="text-lg md:text-xl text-gray-500 ">Offers</p>
        </div>

        <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
          <p className="text-md md:text-xl font-semibold max-w-min rounded-xl px-4 py-2 bg-[var(--purple-accent)] mb-3">
            {1}
          </p>
          <p className="text-lg md:text-xl text-gray-500 ">Rejections</p>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="px-2 text-2xl font-semibold">
          Jobs matching your criteria
        </h1>
        <div className="mt-6">
          <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="./assets/logos/linkedin-logo.png"
                  alt="indeed logo"
                  className="shadow-sm rounded w-5 border border-gray-300"
                />
                <p className="text-xl font-medium text-gray-800 ">Job title</p>
              </div>
              <button className="max-h-min">Apply</button>
            </div>

            <p className="mt-2 text-md text-gray-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              dolore modi, molestiae, ad quasi officiis saepe error laudantium
              facere perspiciatis mollitia veritatis quisquam porro aut hic
              fugit neque quia et!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="./assets/logos/jungle-logo.png"
                  alt="indeed logo"
                  className="shadow-sm rounded w-5 border border-gray-300"
                />
                <p className="text-xl font-medium text-gray-800 ">Job title</p>
              </div>
              <button className="max-h-min">Apply</button>
            </div>

            <p className="mt-2text-md text-gray-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              dolore modi, molestiae, ad quasi officiis saepe error laudantium
              facere perspiciatis mollitia veritatis quisquam porro aut hic
              fugit neque quia et!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="./assets/logos/indeed-logo.png"
                  alt="indeed logo"
                  className="shadow-sm rounded w-5 border border-gray-300"
                />
                <p className="text-xl font-medium text-gray-800 ">Job title</p>
              </div>
              <button className="max-h-min">Apply</button>
            </div>

            <p className="mt-2 text-md text-gray-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              dolore modi, molestiae, ad quasi officiis saepe error laudantium
              facere perspiciatis mollitia veritatis quisquam porro aut hic
              fugit neque quia et!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-white shadow-sm p-6 rounded-3xl flex-column items-center">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="./assets/logos/jungle-logo.png"
                  alt="indeed logo"
                  className="shadow-sm rounded w-5 border border-gray-300"
                />
                <p className="text-xl font-medium text-gray-800 ">Job title</p>
              </div>
              <button className="max-h-min">Apply</button>
            </div>

            <p className="mt-2 text-md text-gray-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              dolore modi, molestiae, ad quasi officiis saepe error laudantium
              facere perspiciatis mollitia veritatis quisquam porro aut hic
              fugit neque quia et!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
