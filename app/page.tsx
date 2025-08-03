"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustedBySection } from "@/components/sections/trusted-by-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FaqSection } from "@/components/sections/faq-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import CtaFormPage from "@/components/sections/cta-form-section"
import { LiveChatWidget } from '@livechat/widget-react'

export default function ProfessionalCompanyFormationPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaFormPage />
        <LiveChatWidget license="19256550"/>
      </main>
      <Footer />
    </div>
  )
}
