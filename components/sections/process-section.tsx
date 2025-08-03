import { FilePlus, Search, Award } from "lucide-react"

export function ProcessSection() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">انطلاقتك تبدأ بـ 3 خطوات فقط</h2>
          <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
            عملية تأسيس مبسطة وشفافة تضمن لك راحة البال.
          </p>
        </div>
        <div className="relative grid gap-12 px-4 md:grid-cols-3">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-2/3 bg-slate-200 dark:bg-slate-700 hidden md:block" />
          <div className="relative flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 z-10">
              <FilePlus className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">1. تقديم الطلب</h3>
            <p className="text-slate-600 dark:text-slate-400">
              املأ نموذجنا السريع بمعلوماتك الأساسية وتفاصيل شركتك المقترحة.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 z-10">
              <Search className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">2. المراجعة والتدقيق</h3>
            <p className="text-slate-600 dark:text-slate-400">
              يقوم فريقنا بمراجعة طلبك، والتحقق من اسم الشركة، وإعداد الوثائق اللازمة.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 z-10">
              <Award className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">3. استلام الرخصة</h3>
            <p className="text-slate-600 dark:text-slate-400">
              استلم سجلك التجاري وجميع وثائق شركتك الرسمية، وانطلق في عالم الأعمال.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
