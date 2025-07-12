"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Play, MoreHorizontal, Download, Share, Trash2, Plus } from "lucide-react"
import Image from "next/image"

interface Video {
  id: string
  title: string
  status: string
  duration: string
  createdAt: string
  thumbnail: string
}

interface ProjectVideosProps {
  videos: Video[]
  projectId: string
}

export function ProjectVideos({ videos }: ProjectVideosProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Videos</CardTitle>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Video
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {videos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No videos yet</h3>
            <p className="text-slate-600 mb-4">Create your first AI-generated video to get started.</p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Video
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
              >
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-20 h-12 object-cover rounded bg-slate-100"
                  />
                  {video.status === "completed" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-900 truncate">{video.title}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <Badge variant="secondary" className={getStatusColor(video.status)}>
                      {video.status}
                    </Badge>
                    <span className="text-sm text-slate-600">{video.duration}</span>
                    <span className="text-sm text-slate-600">{new Date(video.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
