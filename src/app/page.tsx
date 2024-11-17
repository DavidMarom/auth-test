"use client"

import { googleSignup, googleSignOut } from '../services/auth';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={googleSignup} className="px-4 py-2 text-white bg-blue-500 rounded-md">Sign in with Google</button>
      <button onClick={googleSignOut} className="px-4 py-2 text-white bg-red-500 rounded-md">Sign out</button>

    </div>
  );
}
