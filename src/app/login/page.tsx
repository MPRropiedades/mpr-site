"use client"; // 👈 Required for React hooks

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation"; // 👈 Correct import for App Router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      router.push("/admin"); // Redirect after login
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded-lg shadow-lg max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
      </div>
    </div>
  );
}
