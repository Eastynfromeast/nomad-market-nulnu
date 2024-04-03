export default function TailwindPage() {
  return (
    <main className=" flex h-screen items-center justify-center bg-slate-50 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div
            key={index}
            className="group flex items-center gap-5 hover:bg-slate-200"
          >
            <div className="size-7 rounded-full bg-blue-400" />
            <div className="h-3 w-20 rounded-full bg-gray-400" />
            <span className="text-lg font-medium empty:h-5 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300 group-hover:text-red-500">
              {person}
            </span>
            <div className="flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="z-10">{index}</span>
              <div className=" absolute size-6 animate-ping rounded-full bg-red-500 " />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 ">
        <a href="#">aaa</a>
        <button className="btn">Search</button>
      </div>
    </main>
  );
}
