"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Settings, Plus, Share } from "lucide-react"

interface Project {
  project_id: string
  name: string
  description: string
  status: string
}

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "paused":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "archived":
        return "bg-slate-100 text-slate-800 hover:bg-slate-200"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200"
    }
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>

            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-slate-900">{project.name}</h1>
                <Badge variant="secondary" className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-slate-600 mt-1">{project.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Video
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
