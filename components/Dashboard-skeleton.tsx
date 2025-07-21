import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Skeleton */}
      <nav className="bg-white border-b border-gray-200 px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8 rounded-full bg-purple-200" />
              <Skeleton className="h-6 w-20" />
            </div>

            {/* Navigation tabs */}
            <div className="flex space-x-6">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-18" />
            </div>
          </div>

          {/* Center - Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Right side - New Project button and user avatar */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 px-32 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card Skeletons */}
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </main>
    </div>
  )
}

function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
      {/* Project title */}
      <Skeleton className="h-6 w-3/4" />

      {/* Project description */}
      <Skeleton className="h-4 w-full" />

      {/* Status badge */}
      <div className="flex justify-start">
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Created date */}
      <div className="flex items-center space-x-2 pt-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Open Project button */}
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  )
}
