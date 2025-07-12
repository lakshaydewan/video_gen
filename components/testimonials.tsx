"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School Teacher",
    company: "Lincoln High School",
    content:
      "VideoAI has transformed how I create educational content. My students are more engaged than ever, and I save hours every week.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Training Manager",
    company: "TechCorp Inc.",
    content:
      "We've reduced our training video production costs by 80% while improving quality. The AI understands our content perfectly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "EduTube Channel",
    content:
      "As a solo creator, VideoAI gives me the power of a full production team. My channel has grown 300% since I started using it.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Park",
    role: "Marketing Director",
    company: "StartupXYZ",
    content:
      "The quality and speed of video creation is incredible. We can now create product demos and explainers in minutes, not days.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Thompson",
    role: "Online Course Creator",
    company: "LearnMore Academy",
    content:
      "My course completion rates increased by 40% after switching to AI-generated videos. Students love the engaging animations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Wilson",
    role: "HR Director",
    company: "Global Solutions",
    content:
      "Creating onboarding videos used to take weeks. Now we can create personalized training content for each department in hours.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            <span>Loved by Creators</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              10,000+ creators
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            See what educators, trainers, and content creators are saying about VideoAI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-purple-300 mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

              <div className="flex items-center">
                <Image
                  width={1000}
                  height={1000}
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-purple-200 to-blue-200"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
