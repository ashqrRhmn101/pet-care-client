"use client";

import AuthProvider from "@/contexts/authProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
// Create a client
const queryClient = new QueryClient();

export default function Provider({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
