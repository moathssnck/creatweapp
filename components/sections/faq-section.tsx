import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "ما هي المدة المتوقعة لتأسيس الشركة؟",
      answer:
        "تختلف المدة حسب نوع الشركة والجهة الحكومية، ولكننا نعمل على إنجازها في أسرع وقت ممكن، وغالباً ما تتراوح بين 3 إلى 7 أيام عمل.",
    },
    {
      question: "هل أحتاج إلى مقر فعلي للشركة؟",
      answer:
        "يعتمد ذلك على نوع النشاط التجاري. بعض الأنشطة تتطلب مقراً فعلياً، بينما يمكن للبعض الآخر استخدام عناوين افتراضية. يمكننا تقديم المشورة بشأن الخيار الأنسب لك.",
    },
    {
      question: "ما هي المستندات المطلوبة مني؟",
      answer:
        "بشكل عام، ستحتاج إلى نسخة من الهوية الوطنية أو الإقامة، بالإضافة إلى بعض المعلومات الأساسية حول الشركة. سنتواصل معك لتزويدك بقائمة كاملة ودقيقة.",
    },
    {
      question: "هل تقدمون خدمات ما بعد التأسيس؟",
      answer:
        "نعم، نقدم باقة من الخدمات الإضافية مثل المحاسبة، وفتح الحسابات البنكية، وتسجيل العلامات التجارية لمساعدتك على النمو.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">الأسئلة الشائعة</h2>
          <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
            إجابات لأكثر الاستفسارات التي تصلنا من عملائنا.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-right font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
