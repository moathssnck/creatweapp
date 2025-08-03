import { Briefcase, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto py-12 px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2" aria-label="Home">
            <Briefcase className="h-7 w-7 text-blue-500" />
            <span className="font-bold text-xl text-white">الخبراء للتأسيس</span>
          </a>
          <p className="text-slate-400 max-w-md">
            نحن نساعد رواد الأعمال على تحويل أفكارهم إلى واقع ملموس من خلال تقديم خدمات تأسيس شركات احترافية وموثوقة.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">روابط مهمة</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-blue-400 transition-colors">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-blue-400 transition-colors">
                خطوات التأسيس
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-400 transition-colors">
                الأسئلة الشائعة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                سياسة الخصوصية
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">تواصل معنا</h4>
          <ul className="space-y-2 text-slate-400">
            <li>الرياض، المملكة العربية السعودية</li>
            <li>contact@alkhubaraa.sa</li>
            <li>+966 11 555 0101</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto py-4 px-4 md:px-6 text-center text-sm text-slate-500">
          <p>&copy; 2025 الخبراء للتأسيس. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
