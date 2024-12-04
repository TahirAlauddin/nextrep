import { LayoutGrid, Zap, CircleDot } from 'lucide-react'
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"
import { MetricCard } from "@/components/metric-card"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MainNav />
      <div className="flex flex-1 h-[calc(100vh-73px)]">
        <SideNav />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-semibold mb-1">Welcome back, John</h1>
            <p className="text-gray-500 mb-8">Here's what's happening with your accounts</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                icon={LayoutGrid}
                title="Accounts Overview"
                value={24}
                description="Active accounts"
                viewText="View Accounts"
              />
              <MetricCard
                icon={Zap}
                title="New Signals"
                value={12}
                description="Signals in the last 24h"
                viewText="View Signals"
              />
              <MetricCard
                icon={CircleDot}
                title="Context Tasks"
                value={8}
                description="Context tasks to complete"
                viewText="View Context Tasks"
              />
            </div>
          </div>
        </main>
      </div>
      <footer className="text-center py-4 text-sm text-gray-500 border-t mt-8 md:mt-0">
        © 2024 NextRep LLC. All rights reserved.
      </footer>
    </div>
  )
}

