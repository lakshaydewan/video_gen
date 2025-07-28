"use client"
import { Sidebar } from "../../components/chat/sidebar"
import { ChatInterface } from "../../components/chat/chat-interface"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function App() {
  return (
      <SidebarProvider>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <ChatInterface />
        </div>
      </SidebarProvider>
  )
}
