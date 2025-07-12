"use client"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Calendar, Settings, Trash2, Copy } from "lucide-react"
import { useProjectStore } from "@/store"
import { useEffect } from "react"

interface Project {
  project_id: string
  name: string
  description: string
  created_at: string
  status: string
  project_access_key: string
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {

  const { setProjects } = useProjectStore();
   
  useEffect(() => {
    setProjects(projects);
  }, [projects, setProjects])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "suspended":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
          <p className="text-slate-600">Manage your AI video projects</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.project_id} className="border-slate-200 hover:border-slate-300 transition-colors group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg font-semibold text-slate-900 truncate">{project.name}</CardTitle>
                  <p className="text-sm text-slate-600 mt-1 line-clamp-2">{project.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Created {new Date(project.created_at).toLocaleDateString()}
                </div>
                {/* <div className="flex items-center">
                  <Activity className="w-4 h-4 mr-2" />
                  Last activity {project.lastActivity}
                </div> */}
              </div>

              <Link href={`/dashboard/${project.project_id}`}>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">Open Project</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
