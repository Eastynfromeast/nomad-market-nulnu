"use server";

import { redirect } from "next/navigation";

export async function onFormSubmit(prevState: any, formData: FormData) {
	console.log(prevState);
	await new Promise(resolve => setTimeout(resolve, 5000));
	console.log("logged in!");
	redirect("/");
	return {
		errors: ["wrong password", "password too short"],
	};
}
