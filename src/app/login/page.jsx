"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hard coded user data
    const adminEmail = "admin@gmail.com";
    const adminPass = "123456";

    if (email === adminEmail && password === adminPass) {
      // Browser cookie setup
      document.cookie = "isLoggedIn=true; path=/";

      alert("Login Successful!");

      // after successfull login redirect to items page
      router.push("/items");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <form
        onSubmit={handleLogin}
        className="border-4 border-black p-10 space-y-4"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email (admin@gmail.com)"
          className="border p-2 w-full"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (123456)"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
