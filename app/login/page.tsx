import Link from "next/link";
import FromInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";

export default function LogIn() {
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">Log in</h1>
				<h2 className="text-xl">Log in with email and password.</h2>
			</div>
			<form className="flex flex-col gap-3">
				<FromInput type="email" placeholder="Email" required errors={[]} />
				<FromInput type="password" placeholder="Password" required errors={[]} />

				<FormButton loading={false} text="Log In" />
			</form>
			<SocialLogin />
		</div>
	);
}
