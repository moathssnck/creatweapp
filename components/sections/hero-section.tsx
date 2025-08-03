import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="w-full relative">
      <div className="absolute inset-0 bg-slate-900 scc">
        <img
          src="/pexels-anna-nekrashevich-7552316.jpg"
          alt="خلفية مجردة"
          className="w-full h-full object-cover opacity-50          "
        />
      </div>
      <div className="container relative px-4 md:px-6 h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            حوّل فكرتك إلى شركة ناجحة. معنا.
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            نحن شريكك الاستراتيجي لتأسيس الشركات، نقدم لك خبراتنا لضمان انطلاقة قوية ومستدامة في عالم الأعمال.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#form">
                ابدأ رحلتك
                <ArrowLeft className="ms-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-400 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href="#features">اكتشف خدماتنا</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
