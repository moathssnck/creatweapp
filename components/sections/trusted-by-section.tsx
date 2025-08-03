export function TrustedBySection() {
  const logos = [
    { name: "Innovate Corp", src: "/Stripe_Logo,_revised_2016.svg.png" },
    { name: "Future Solutions", src: "/channels4_profile.jpg" },
    { name: "Quantum Leap", src: "/Apple_logo_black.svg" },
    { name: "Apex Industries", src: "/Amazon_logo.svg.png" },
    { name: "Strive Tech", src: "/vercel.svg" },
  ]

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          شركاء النجاح الذين وثقوا بنا
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 sm:gap-x-12">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              className="h-7 sm:h-8 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
