"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

interface Project {
  project_id: string
  name: string
  project_access_key: string
}

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [showproject_access_key, setShowproject_access_key] = useState(false)

  const copyToClipboard = (text: string, label: string) => {
    console.log(text)
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Project Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* <div className="text-center p-3 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-slate-900">{project.totalViews}</div>
            <div className="text-sm text-slate-600">Total Views</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-slate-900">{project.totalDuration}</div>
            <div className="text-sm text-slate-600">Total Duration</div>
          </div> */}
        </div>

        {/* Access Key */}
        <div className="space-y-2">
          <Label>Access Key</Label>
          <div className="flex items-center space-x-2">
            <Input
              type={showproject_access_key ? "text" : "password"}
              value={project.project_access_key}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={() => setShowproject_access_key(!showproject_access_key)}>
              {showproject_access_key ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={() => copyToClipboard(project.project_access_key, "Access key")}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-slate-600">Use this key to authenticate API requests for this project.</p>
        </div>

        {/* API Endpoint */}
        <div className="space-y-2">
          <Label>API Endpoint</Label>
          <div className="flex items-center space-x-2">
            {/* <Input value={project.apiEndpoint} readOnly className="font-mono text-sm" /> */}
            {/* <Button variant="outline" size="icon" onClick={() => copyToClipboard(project.apiEndpoint, "API endpoint")}>
              <Copy className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open(project.apiEndpoint, "_blank")}>
              <ExternalLink className="w-4 h-4" />
            </Button> */}
          </div>
        </div>

        {/* Webhook URL */}
        {/* <div className="space-y-2">
          <Label>Webhook URL</Label>
          <div className="flex items-center space-x-2">
            <Input value={project.webhookUrl} readOnly className="font-mono text-sm" />
            <Button variant="outline" size="icon" onClick={() => copyToClipboard(project.webhookUrl, "Webhook URL")}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-slate-600">Receive notifications when videos are processed.</p>
        </div> */}
      </CardContent>
    </Card>
  )
}
