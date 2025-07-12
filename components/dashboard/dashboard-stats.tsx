"use client"


// interface Project {
//   id: string
//   name: string
//   description: string
//   createdAt: string
//   status: string
//   videosCount: number
//   lastActivity: string
//   accessKey: string
// }

// interface DashboardStatsProps {
//   projects: Project[]
// }

export function DashboardStats() {
//   const totalVideos = projects.reduce((sum, project) => sum + project.videosCount, 0)
//   const activeProjects = projects.filter((p) => p.status === "active").length

//   const stats = [
//     {
//       title: "Total Projects",
//       value: projects.length.toString(),
//       icon: Users,
//       description: `${activeProjects} active`,
//       trend: "+12%",
//     },
//     {
//       title: "Total Videos",
//       value: totalVideos.toString(),
//       icon: Play,
//       description: "Across all projects",
//       trend: "+23%",
//     },
//     {
//       title: "Processing Time",
//       value: "2.3m",
//       icon: Clock,
//       description: "Average per video",
//       trend: "-15%",
//     },
//     {
//       title: "Success Rate",
//       value: "99.2%",
//       icon: TrendingUp,
//       description: "Video generation",
//       trend: "+0.5%",
//     },
//   ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* {stats.map((stat) => (
        <Card key={stat.title} className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-slate-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-slate-600">{stat.description}</p>
              <span className="text-xs text-green-600 font-medium">{stat.trend}</span>
            </div>
          </CardContent>
        </Card>
      ))} */}
    </div>
  )
}
