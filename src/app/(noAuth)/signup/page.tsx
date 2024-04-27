import { SignUpForm } from "@/components/pages/noAuth/signup/form";
import { SkeletonSignUpForm } from "@/components/pages/noAuth/signup/skeleton/skeletonForm";
import { Suspense } from "react";

export default function SignUp() {
  return (
    <Suspense fallback={<SkeletonSignUpForm />}>
      <SignUpForm />
    </Suspense>
  );
}
