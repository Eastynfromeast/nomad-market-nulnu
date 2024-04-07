"use client";

import FromInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";
import { useFormState } from "react-dom";
import { onFormSubmit } from "./actions";

export default function LogIn() {
	const [state, action] = useFormState(onFormSubmit, null);

	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">Log in</h1>
				<h2 className="text-xl">Log in with email and password.</h2>
			</div>
			<form action={action} className="flex flex-col gap-3">
				<FromInput name="email" type="email" placeholder="Email" required errors={[]} />
				<FromInput name="password" type="password" placeholder="Password" required errors={state?.errors ?? []} />
				<FormButton text="Log In" />
			</form>
			<SocialLogin />
		</div>
	);
}

/* 

	how we can communicate with the result of server action and our UI
		useFormState(fn, prevState)
*/
