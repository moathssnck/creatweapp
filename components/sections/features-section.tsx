import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, ShieldCheck, Handshake, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "تأسيس سريع وفعّال",
      description: "ننجز كافة الإجراءات القانونية والإدارية لتأسيس شركتك في أسرع وقت ممكن.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "استشارات قانونية",
      description: "فريق من الخبراء القانونيين لتقديم المشورة وضمان التوافق مع الأنظمة المحلية.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-500" />,
      title: "شريكك الموثوق",
      description: "نقدم خدمات ما بعد التأسيس لمساعدتك على النمو والتوسع بثقة.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "تخطيط مالي وضرائبي",
      description: "مساعدة في إعداد الهيكل المالي والضريبي الأمثل لشركتك منذ اليوم الأول.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">خدمات متكاملة لرواد الأعمال</h2>
          <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
            نقدم باقة من الحلول المصممة خصيصاً لتلبية احتياجات شركتك الناشئة.
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600 dark:text-slate-300">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
