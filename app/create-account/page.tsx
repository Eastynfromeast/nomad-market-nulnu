import Link from "next/link";
import FromInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";

export default function CreateAccount() {
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">Join us</h1>
				<h2 className="text-xl">Fill in the form below to join!</h2>
			</div>
			<form className="flex flex-col gap-3">
				<FromInput type="text" placeholder="Username" required errors={[]} />
				<FromInput type="email" placeholder="Email" required errors={[]} />
				<FromInput type="password" placeholder="Password" required errors={[]} />
				<FromInput type="password" placeholder="Comfirm Password" required errors={[]} />
				<FormButton loading={false} text="Create Account" />
			</form>
			<SocialLogin />
		</div>
	);
}
