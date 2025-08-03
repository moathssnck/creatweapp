import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "أحمد العلي",
      title: "مؤسس، شركة تكنولوجيا المستقبل",
      image: "/placeholder.svg?width=64&height=64",
      quote: "كانت عملية التأسيس معهم سلسة واحترافية بشكل لا يصدق. الدعم الذي حصلت عليه كان فوق التوقعات.",
    },
    {
      name: "فاطمة الزهراني",
      title: "المدير التنفيذي، متجر إبداع",
      image: "/placeholder.svg?width=64&height=64",
      quote: "وفروا عليّ الكثير من الوقت والجهد. أنصح بهم بشدة لكل من يرغب في بدء مشروعه الخاص دون تعقيدات.",
    },
    {
      name: "خالد الغامدي",
      title: "شريك مؤسس، حلول لوجستية",
      image: "/placeholder.svg?width=64&height=64",
      quote: "الشفافية والخبرة التي يتمتع بها الفريق جعلتني أشعر بالاطمئنان طوال عملية التأسيس. شكرًا لكم!",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ماذا يقول عملاؤنا؟</h2>
          <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
            شهادات نعتز بها من شركائنا في النجاح.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800 border-t-4 border-blue-500 shadow-md">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
