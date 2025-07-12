"use client"

import { motion } from "framer-motion"
import { Edit3, Sparkles, Download, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Edit3,
    title: "Write Your Script",
    description:
      "Simply type your content or upload your script. Our AI understands context and creates engaging narratives.",
    color: "from-purple-600 to-purple-700",
  },
  {
    icon: Sparkles,
    title: "AI Creates Magic",
    description:
      "Our advanced AI generates animations, selects visuals, adds voiceover, and creates smooth transitions.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Download your video in HD quality or share directly to social media, LMS, or embed anywhere.",
    color: "from-green-600 to-green-700",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-white">
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
            <span>Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Create videos in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              3 simple steps
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            No video editing experience required. Our AI handles all the complex work while you focus on your content.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-4`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-slate-500 mb-1">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">{step.description}</p>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
                  >
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 z-10"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
