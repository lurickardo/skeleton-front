"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button/button";
import { type SignInFormType, signInFormSchema } from "@/forms/noAuth/signin";

export function SignInForm() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormType>({
    mode: "onBlur",
    resolver: zodResolver(signInFormSchema),
  });

  const signIn = async ({ email, password }: SignInFormType) => {
    console.log(email, password);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(signIn)} id="signInForm">
      <input
        {...register("email")}
        type="email"
        name="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <input
        {...register("password")}
        type="password"
        name="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}
      <Button submitting={isSubmitting}>Sign In</Button>
    </form>
  );
}
