"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

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

      // Success logic stays same
      alert("Login Successful!");

      // after successfull login redirect to items page
      router.push("/items");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 mt-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-md z-10">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-500/30 mb-4">
              <Lock size={30} />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="admin@gmail.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <ShieldCheck
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                />
                <span className="text-sm text-slate-500">Remember me</span>
              </div>
              <button
                type="button"
                className="text-sm font-bold text-blue-600 hover:underline"
              >
                Forgot?
              </button>
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]">
              SIGN IN
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?
              <button className="ml-2 font-bold text-slate-900 dark:text-white hover:text-blue-600">
                Create Account
              </button>
            </p>
          </div>
        </div>

        {/* Security Note */}
        <p className="mt-8 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
          <ShieldCheck size={14} />
          Secure 256-bit SSL Encrypted Connection
        </p>
      </div>
    </div>
  );
}
