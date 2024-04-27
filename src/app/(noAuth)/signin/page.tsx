import { SignInForm } from "@/components/pages/noAuth/signin/form";
import { SkeletonSignInForm } from "@/components/pages/noAuth/signin/skeleton/skeletonForm";
import { Suspense } from "react";

export default function SignIn() {
  return (
    <>
      <Suspense fallback={<SkeletonSignInForm />}>
        <SignInForm />
      </Suspense>
    </>
  );
}
