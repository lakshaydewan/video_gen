"use client"
import { Plus, MessageSquare, User, BookOpen, Grid3X3 } from "lucide-react"
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Placeholder data for chat history
const chatHistory = [
  { id: 1, title: "Introduction to React Hooks", timestamp: "2 hours ago" },
  { id: 2, title: "Machine Learning Basics", timestamp: "1 day ago" },
  { id: 3, title: "JavaScript Async/Await", timestamp: "3 days ago" },
  { id: 4, title: "CSS Grid Layout", timestamp: "1 week ago" },
  { id: 5, title: "Node.js Best Practices", timestamp: "2 weeks ago" },
]

const journals = [
  { id: 1, title: "Daily Learning Notes" },
  { id: 2, title: "Project Ideas" },
  { id: 3, title: "Code Snippets" },
]

const spaces = [
  { id: 1, title: "Frontend Development" },
  { id: 2, title: "Data Science" },
  { id: 3, title: "System Design" },
]

export function Sidebar() {
  const handleNewChat = () => {
    console.log("New chat started")
  }

  const handleChatClick = (id: number) => {
    console.log(`Loading chat with ID: ${id}`)
  }

  const handleAddJournal = () => {
    console.log("Adding new journal")
  }

  const handleAddSpace = () => {
    console.log("Adding new space")
  }

  return (
    <SidebarPrimitive className="border-r">
      <SidebarHeader className="p-4">
        <Button
          onClick={handleNewChat}
          className="w-full justify-start gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Recent Chats */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2">
            Recent Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton
                    onClick={() => handleChatClick(chat.id)}
                    className="w-full justify-start gap-2 px-2 py-2 text-sm hover:bg-accent"
                  >
                    <MessageSquare className="h-4 w-4 shrink-0" />
                    <div className="flex flex-col items-start overflow-hidden">
                      <span className="truncate font-medium">{chat.title}</span>
                      <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Journals */}
        {/* <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2 flex items-center justify-between">
            Journals
            <Button variant="ghost" size="sm" onClick={handleAddJournal} className="h-5 w-5 p-0 hover:bg-accent">
              <Plus className="h-3 w-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {journals.map((journal) => (
                <SidebarMenuItem key={journal.id}>
                  <SidebarMenuButton className="w-full justify-start gap-2 px-2 py-2 text-sm hover:bg-accent">
                    <BookOpen className="h-4 w-4 shrink-0" />
                    <span className="truncate">{journal.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        {/* Spaces */}
        {/* <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2 flex items-center justify-between">
            Spaces
            <Button variant="ghost" size="sm" onClick={handleAddSpace} className="h-5 w-5 p-0 hover:bg-accent">
              <Plus className="h-3 w-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {spaces.map((space) => (
                <SidebarMenuItem key={space.id}>
                  <SidebarMenuButton className="w-full justify-start gap-2 px-2 py-2 text-sm hover:bg-accent">
                    <Grid3X3 className="h-4 w-4 shrink-0" />
                    <span className="truncate">{space.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">ash</span>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </SidebarPrimitive>
  )
}
