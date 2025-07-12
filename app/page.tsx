import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default async function Home() {
  // check if the user is authenticated
  // const res = await auth()

  // if authenticated, redirect to the dashboard
  // if (res.userId) {
  //   return redirect("/dashboard")
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
