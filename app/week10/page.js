"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10 gap-5 bg-violet-800 text-white">

        {!user && <p>Sign in to see the link to the shopping list page</p>}
        {!user && <button onClick={handleSignIn}>Sign In</button>}
        {user && (
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
        )}
        {user && <Link href="/week8/shopping-list">Shopping List</Link>}
        {user && <button onClick={handleSignOut}>Sign Out</button>}
      </div>
  );
}