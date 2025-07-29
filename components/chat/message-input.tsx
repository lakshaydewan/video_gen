"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Send, Plus, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface MessageInputProps {
  onSendMessage: (message: string, attachedFiles: File[]) => void
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("")
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (message.trim() || attachedFiles.length > 0) {
      console.log("Message submitted:", message)
      console.log("Attached files:", attachedFiles)

      onSendMessage(message.trim(), attachedFiles)
      setMessage("")
      setAttachedFiles([])
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    console.log(
      "Files selected:",
      files.map((file) => file.name),
    )
    setAttachedFiles((prev) => [...prev, ...files])
  }

  const handleAddFile = () => {
    fileInputRef.current?.click()
  }

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event as React.FormEvent)
    }
  }

  return (
    <div className="border-t bg-background p-4">
      {/* Attached Files */}
      {attachedFiles.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {attachedFiles.map((file, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1 px-2 py-1">
              <Paperclip className="h-3 w-3" />
              <span className="text-xs">{file.name}</span>
              <button onClick={() => removeFile(index)} className="ml-1 text-muted-foreground hover:text-foreground">
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx,.txt"
        />

        {/* Add file button */}
        <Button type="button" variant="ghost" size="sm" onClick={handleAddFile} className="shrink-0 h-10 w-10 p-0">
          <Plus className="h-4 w-4" />
        </Button>

        {/* Message input */}
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="min-h-[40px] max-h-32 resize-none pr-12 py-2"
            rows={1}
          />

          {/* Send button */}
          <Button
            type="submit"
            size="sm"
            disabled={!message.trim() && attachedFiles.length === 0}
            className="absolute right-2 bottom-2 h-6 w-6 p-0"
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>

        {/* Additional action buttons */}
        {/* <div className="flex gap-1">
          <Button type="button" variant="ghost" size="sm" className="text-xs px-2 py-1 h-8">
            @ Add tools
          </Button>
          <Button type="button" variant="ghost" size="sm" className="text-xs px-2 py-1 h-8">
            DeepTutor
          </Button>
        </div> */}
      </form>
    </div>
  )
}
