"use client"

import { useState } from "react"
import {
  Share,
  User,
  ClapperboardIcon as Whiteboard,
  BarChart3,
  Brain,
  Zap,
  FileText,
  Download,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageInput } from "../../components/chat/message-input"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Updated message interface to include attachments
interface MessageAttachment {
  id: string
  name: string
  type: string
  size: number
  url: string
}

interface Message {
  id: number
  sender: "user" | "ai"
  text: string
  timestamp: Date
  attachments?: MessageAttachment[]
}

// Placeholder messages data with attachments
const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    text: "Hello! I'm Feynman-2, your AI learning assistant. I'm here to help you understand complex topics by breaking them down into simple, digestible explanations. What would you like to learn about today?",
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
  },
  {
    id: 2,
    sender: "user",
    text: "Can you explain how React hooks work? I've attached some documentation I found.",
    timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    attachments: [
      {
        id: "1",
        name: "react-hooks-guide.pdf",
        type: "application/pdf",
        size: 2048576,
        url: "/placeholder.svg?height=200&width=150&text=PDF",
      },
      {
        id: "2",
        name: "component-diagram.png",
        type: "image/png",
        size: 1024000,
        url: "/placeholder.svg?height=200&width=300&text=React+Component+Diagram",
      },
    ],
  },
  {
    id: 3,
    sender: "ai",
    text: "Great question! I can see you've shared some helpful resources. Think of React hooks as special functions that let you 'hook into' React's features. The most common one is useState, which is like having a memory box that React watches. When you change what's in the box, React automatically updates your webpage to show the new content.",
    timestamp: new Date(Date.now() - 180000), // 3 minutes ago
  },
]

// File attachment component
function FileAttachment({ attachment }: { attachment: MessageAttachment }) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const isImage = attachment.type.startsWith("image/")
  const isPDF = attachment.type === "application/pdf"

  if (isImage) {
    return (
      <div className="relative group rounded-lg overflow-hidden border bg-muted/50 max-w-sm">
        <img
          src={attachment.url || "/placeholder.svg"}
          alt={attachment.name}
          className="w-full h-auto max-h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button variant="secondary" size="sm" className="gap-2">
            <Eye className="h-4 w-4" />
            View
          </Button>
        </div>
        <div className="p-2 bg-background/95 backdrop-blur">
          <p className="text-xs font-medium truncate">{attachment.name}</p>
          <p className="text-xs text-muted-foreground">{formatFileSize(attachment.size)}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/50 max-w-sm">
      <div className="flex-shrink-0">
        {isPDF ? (
          <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <FileText className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{attachment.name}</p>
        <p className="text-xs text-muted-foreground">{formatFileSize(attachment.size)}</p>
      </div>
      <Button variant="ghost" size="sm" className="flex-shrink-0 h-8 w-8 p-0">
        <Download className="h-4 w-4" />
      </Button>
    </div>
  )
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleSendMessage = (messageText: string, attachedFiles: File[]) => {
    // Convert files to attachments
    const attachments: MessageAttachment[] = attachedFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      type: file.type,
      size: file.size,
      url: URL.createObjectURL(file), // Create object URL for preview
    }))

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: messageText,
      timestamp: new Date(),
      attachments: attachments.length > 0 ? attachments : undefined,
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        text:
          attachments.length > 0
            ? `I can see you've shared ${attachments.length} file(s). Let me analyze them and help you with your question...`
            : "I understand your question. Let me help you with that...",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary h-8">
                Video-Gen
            </Badge>
            <span className="text-sm text-muted-foreground">AI Learning Assistant</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="sm" className="gap-2">
            <Whiteboard className="h-4 w-4" />
            <span className="hidden sm:inline">Whiteboard</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Graph</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">Quiz</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">Flashcards</span>
          </Button> */}
          <Button variant="ghost" size="sm" className="gap-2">
            <Share className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Messages */}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">What's on your mind, ash?</h2>
              <p className="text-muted-foreground">Start a conversation with your AI learning assistant</p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "ai" && (
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-[70%] ${message.sender === "user" ? "order-first" : ""}`}>
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>

                {/* File attachments */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {message.attachments.map((attachment) => (
                      <FileAttachment key={attachment.id} attachment={attachment} />
                    ))}
                  </div>
                )}

                <p className="text-xs text-muted-foreground mt-1 px-1">{formatTime(message.timestamp)}</p>
              </div>

              {message.sender === "user" && (
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))
        )}
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  )
}
