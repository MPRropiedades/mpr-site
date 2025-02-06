"use client"; // 👈 Required for React hooks

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js"; 


export default function Admin() {
  const [user, setUser] = useState<User | null>(null); 
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login"); // Redirect if not logged in
      } else {
        setUser(data.user);
      }
    }
    checkAuth();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <button onClick={() => supabase.auth.signOut().then(() => router.push("/login"))} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
      {/* (Rest of the admin page remains unchanged) */}
    </div>
  );
}
