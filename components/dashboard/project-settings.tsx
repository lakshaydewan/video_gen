"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Trash2 } from "lucide-react"

interface Project {
  id: string
  name: string
  status: string
}

interface ProjectSettingsProps {
  project: Project
}

export function ProjectSettings({ project }: ProjectSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Notifications */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-900">Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="text-sm">
                Email notifications
              </Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="webhook-notifications" className="text-sm">
                Webhook notifications
              </Label>
              <Switch id="webhook-notifications" defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        {/* Project Status */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-900">Project Status</h4>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              disabled={project.status === "paused"}
            >
              {project.status === "active" ? "Pause Project" : "Resume Project"}
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Archive Project
            </Button>
          </div>
        </div>

        <Separator />

        {/* Danger Zone */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h4 className="font-medium text-red-900">Danger Zone</h4>
          </div>
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-red-900">Delete Project</h5>
                <p className="text-sm text-red-700">
                  This will permanently delete the project and all its videos. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Project
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
