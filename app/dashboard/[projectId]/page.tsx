'use client'
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import { ProjectHeader } from "@/components/dashboard/project-header"
import { ProjectDetails } from "@/components/dashboard/project-details"
import { ProjectVideos } from "@/components/dashboard/project-videos"
import { ProjectSettings } from "@/components/dashboard/project-settings"
import { useProjectStore } from "@/store"

const mockVideos = [
  {
    id: "vid_1",
    title: "Introduction to Algebra",
    status: "completed",
    duration: "3:45",
    createdAt: "2024-01-20",
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "vid_2",
    title: "Quadratic Equations Explained",
    status: "processing",
    duration: "4:12",
    createdAt: "2024-01-19",
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "vid_3",
    title: "Geometry Basics",
    status: "completed",
    duration: "5:23",
    createdAt: "2024-01-18",
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
]


const ProjectPage = () => {

  const { projectId } = useParams()
  console.log("ProjectId", projectId)

  const { projects } = useProjectStore();
  console.log("Projects From Store", projects)

  const project = projects.find((p) => p.project_id == projectId?.toString())
  console.log("Project From Store", project)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ProjectHeader project={project} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProjectVideos videos={mockVideos} projectId={project.project_id} />
          </div>
          <div className="space-y-8">
            <ProjectDetails project={project} />
            <ProjectSettings project={project} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectPage
