import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-md text-lg font-semibold">N</div>
        <span className="font-semibold">NextRep</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-semibold text-sm">JD</span>
        <Button variant="outline" className="bg-white text-green-500 border-green-500 hover:bg-green-50">
          Upgrade to Pro
        </Button>
      </div>
    </div>
  )
}
