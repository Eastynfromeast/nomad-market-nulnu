export default function Home() {
	return (
		<main className=" bg-gray-100 h-screen flex items-center justify-center p-5">
			<div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
		{["Nico", "Me","You","Yourself"].map((person, index) => 
    (
      <div key={index} className="flex items-center gap-5 group hover:bg-slate-200">
        <div className="size-7 bg-blue-400 rounded-full" />
        <div className="w-20 h-3 rounded-full bg-gray-400"/>
        <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:bg-gray-300 empty:animate-pulse group-hover:text-red-500">{person}</span>
        <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
          <span className="z-10">{index}</span>
          <div className=" size-6 bg-red-500 rounded-full absolute animate-ping"/>
        </div>
      </div>
    ))}
			</div>
		</main>
	);
}
