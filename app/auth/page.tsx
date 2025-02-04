"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // Handle Login (Allow any email & password)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Store user in localStorage
    localStorage.setItem("user", email);
    setUser(email);
    setEmail("");
    setPassword("");

    router.push("/"); // Redirect to home page
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-blue-300">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-blue-600">
              Welcome, {user}!
            </h2>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
