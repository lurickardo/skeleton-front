import { Button } from "@/components/button/button";
import { redirect } from "next/navigation";

export async function SignInForm() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  async function signIn(form: FormData) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));

    redirect("/dashboard");
  }

  return (
    <form action={signIn} method="POST">
      <input
        type="email"
        name="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <input
        type="password"
        name="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <Button>Sign In</Button>
    </form>
  );
}
