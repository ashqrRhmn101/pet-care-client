"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "./authContext";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading/Loading";

export default function PrivateRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/Auth/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <Loading/>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
