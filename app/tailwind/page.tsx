export default function TailwindPage() {
  return (
    <main className=" flex h-screen items-center justify-center bg-gray-100 p-5 sm:bg-red-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        <input
          className="h-10 w-full rounded-full bg-gray-200 py-3 pl-5 outline-none ring ring-transparent transition-shadow placeholder:drop-shadow focus:ring-orange-500 focus:ring-offset-2"
          type="text"
          placeholder="Search here..."
        />
        <button className="rounded-full bg-black py-2 font-medium text-white outline-none transition-transform focus:scale-90 active:scale-90">
          Search
        </button>
      </div>
    </main>
  );
}
