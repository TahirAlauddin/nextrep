'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClerkProvider, SignInButton, SignedOut, UserButton, SignedIn, useUser } from '@clerk/nextjs'

export function MainNav() {
  const {user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-md text-lg font-semibold">N</div>
        <span className="font-semibold">NextRep</span>
      </div>
      <div className="flex items-center space-x-4">
        {(isSignedIn && user) ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-semibold text-sm">{user?.firstName?.[0] + user?.lastName?.[0]}</span> : <></>}
        <Button variant="outline" className="bg-white text-green-500 border-green-500 hover:bg-green-50">
          Upgrade to Pro
        </Button>
      </div>
    </div>
  )
}

