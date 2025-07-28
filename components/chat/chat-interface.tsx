"use client"

import { useState } from "react"
import { Share, User, ClapperboardIcon as Whiteboard, BarChart3, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageInput } from "../chat/message-input"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Placeholder messages data
const initialMessages = [
  {
    id: 1,
    sender: "ai",
    text: "Hello! I'm Feynman-2, your AI learning assistant. I'm here to help you understand complex topics by breaking them down into simple, digestible explanations. What would you like to learn about today?",
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
  },
  {
    id: 2,
    sender: "user",
    text: "Can you explain how React hooks work?",
    timestamp: new Date(Date.now() - 240000), // 4 minutes ago
  },
  {
    id: 3,
    sender: "ai",
    text: "Great question! Think of React hooks as special functions that let you 'hook into' React's features. The most common one is useState, which is like having a memory box that React watches. When you change what's in the box, React automatically updates your webpage to show the new content. It's like having a smart assistant that redraws your page whenever something important changes!",
    timestamp: new Date(Date.now() - 180000), // 3 minutes ago
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState(initialMessages)

  const handleSendMessage = (messageText: string, attachedFiles: File[]) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      text: messageText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai" as const,
        text: "I understand your question. Let me help you with that...",
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
