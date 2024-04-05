"use client";
import Loader from "@/components/Loader";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (user) {
    return <Loader />;
  } else {
    return (
      <main className="flex h-screen w-full items-center justify-center">
        <SignIn redirectUrl="/dashboard" />
      </main>
    );
  }
};

export default SignInPage;

