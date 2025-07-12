"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Palette, Globe, Clock, Shield, Brain, Video, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description: "Advanced AI creates professional videos from your text prompts in minutes, not hours.",
  },
  {
    icon: Palette,
    title: "Customizable Styles",
    description: "Choose from dozens of animation styles, colors, and themes to match your brand.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate high-quality animated videos in under 5 minutes with our optimized AI engine.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create videos in 50+ languages with natural-sounding AI voiceovers.",
  },
  {
    icon: Video,
    title: "HD Quality Export",
    description: "Export your videos in 4K resolution with professional-grade quality.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team, share projects, and manage permissions easily.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Reduce video production time by 90% compared to traditional animation methods.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and data encryption at rest.",
  },
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "Pre-built templates for education, marketing, training, and more use cases.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Everything you need to create
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              amazing videos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Our AI-powered platform provides all the tools you need to create professional animated videos without any
            technical expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
