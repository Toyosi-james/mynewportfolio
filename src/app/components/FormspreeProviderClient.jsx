"use client";

import { FormspreeProvider } from "@formspree/react";

export default function FormspreeProviderClient({ children }) {
  return (
    <FormspreeProvider project="mzzjpepd">
      {children}
    </FormspreeProvider>
  );
}
