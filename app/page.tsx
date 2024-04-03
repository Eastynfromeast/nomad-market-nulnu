import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-between min-h-screen p-6">
			<div className="my-auto flex flex-col items-center gap-2 *:font-medium">
				<span className="text-9xl">🥕</span>
				<h1 className="text-4xl">Carrot</h1>
				<h2 className="text-2xl">Welcome to Carrot Market!</h2>
			</div>
			<div className="flex flex-col items-center gap-3 w-full">
				<Link href="/create-account" className="primary-btn py-2.5 text-lg ">
					시작하기
				</Link>
				<div className="flex gap-1">
					<span>이미 계정이 있으신가요?</span>
					<Link href="/login" className="hover:underline underline-offset-4">
						로그인
					</Link>
				</div>
			</div>
		</div>
	);
}
