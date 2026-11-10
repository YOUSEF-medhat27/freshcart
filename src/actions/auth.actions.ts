"use server";

import { API_URL } from "@/lib/config";
import { registerSchema, type RegisterValues } from "@/schema/auth.schema";

export async function registerUser(values: RegisterValues) {
  const parsed = registerSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0].message };
  }

  try {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
      return { ok: false, message: data.message ?? "Registration failed" };
    }
    return { ok: true, message: data.message as string };
  } catch {
    return { ok: false, message: "Network error, please try again" };
  }
}