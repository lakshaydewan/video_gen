import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectsGrid } from "@/components/dashboard/project-grid"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { getProjects } from "@/actions/user-actions"

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const projects = await getProjects();

  console.log("projects", projects)

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <DashboardStats />
          <ProjectsGrid projects={projects} />
        </div>
      </main>
    </div>
  )
}
