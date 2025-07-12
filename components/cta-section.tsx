"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export default function CTASection() {

    return (
        <>
            <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Ready to Get Started?</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Start creating amazing videos
                            <br />
                            with AI today
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
                        >
                            Join thousands of creators who are already using VideoAI to transform
                            their ideas into engaging animated videos.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
                        >
                            <Link href="/sign-up">
                                <Button
                                    size="lg"
                                    className="bg-white text-purple-600 hover:bg-slate-50 px-8 py-3 text-lg font-semibold group"
                                >
                                    Start Creating Free
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold group backdrop-blur-sm bg-transparent"
                            >
                                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                Watch Demo
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-white/80 text-sm"
                        >
                            No credit card required • 14-day free trial • Cancel anytime
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
