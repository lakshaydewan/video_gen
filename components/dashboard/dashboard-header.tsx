"use client"

import { useState } from "react"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Plus, Search, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CreateProjectDialog } from "./create-project-dialog"

export function DashboardHeader() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold">VideoAI</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <span className="text-sm font-medium text-slate-900">Projects</span>
              <span className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer">Templates</span>
              <span className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer">Analytics</span>
            </nav>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Search projects..." className="pl-10 bg-slate-50 border-slate-200 focus:bg-white" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-slate-900 hover:bg-slate-800 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>

      <CreateProjectDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />
    </header>
  )
}
