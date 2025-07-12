import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"
import { ProjectHeader } from "@/components/dashboard/project-header"
import { ProjectDetails } from "@/components/dashboard/project-details"
import { ProjectVideos } from "@/components/dashboard/project-videos"
import { ProjectSettings } from "@/components/dashboard/project-settings"

// Mock data - in real app, this would come from your database
const mockProjects = [
  {
    id: "proj_1",
    name: "Educational Math Series",
    description: "AI-generated videos for teaching algebra and geometry concepts",
    createdAt: "2024-01-15",
    status: "active",
    videosCount: 12,
    lastActivity: "2 hours ago",
    accessKey: "ak_1a2b3c4d5e6f7g8h",
    apiEndpoint: "https://api.videoai.com/v1/projects/proj_1",
    webhookUrl: "https://your-app.com/webhooks/videoai",
    totalViews: 1250,
    totalDuration: "45 minutes",
  },
  {
    id: "proj_2",
    name: "Corporate Training Hub",
    description: "Employee onboarding and training video series",
    createdAt: "2024-01-10",
    status: "active",
    videosCount: 8,
    lastActivity: "1 day ago",
    accessKey: "ak_9i8h7g6f5e4d3c2b",
    apiEndpoint: "https://api.videoai.com/v1/projects/proj_2",
    webhookUrl: "https://your-app.com/webhooks/videoai",
    totalViews: 890,
    totalDuration: "32 minutes",
  },
  {
    id: "proj_3",
    name: "Marketing Campaign Videos",
    description: "Product demo and explainer videos for Q1 campaign",
    createdAt: "2024-01-05",
    status: "paused",
    videosCount: 5,
    lastActivity: "3 days ago",
    accessKey: "ak_1z2y3x4w5v6u7t8s",
    apiEndpoint: "https://api.videoai.com/v1/projects/proj_3",
    webhookUrl: "https://your-app.com/webhooks/videoai",
    totalViews: 456,
    totalDuration: "18 minutes",
  },
]

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

interface Props {
  params: Promise<{ projectId: string }>
}

const ProjectPage = async ({ params }: Props) => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const { projectId } = await params

  const project = mockProjects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ProjectHeader project={project} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProjectVideos videos={mockVideos} projectId={project.id} />
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
