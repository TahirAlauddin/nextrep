import { SignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (


    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">You're signed out</h1>
          <p className="mt-2 text-sm text-gray-600">
            You need to log in to access the dashboard or sign up if you don't have an account.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
