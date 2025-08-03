"use client"

import {  useState } from "react"
import { useEffect } from "react"
import { handleFormSubmission, type FormState } from "@/app/actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/ui/file-upload"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"

const initialState: FormState = {
  message: "",
  errors: {},
  success: false,
}

export default function CtaFormPage() {
  const [state, formAction] = useState(initialState)
  const [isPending, setIsPending] = useState(false)
  handleFormSubmission
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "تم بنجاح!" : "حدث خطأ",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state, toast])

  return (
    <>
      <Toaster />
      <div className="bg-slate-50 dark:bg-slate-950">
        <section id="form" className="w-full py-12 md:py-24 lg:py-32" dir="rtl">
          <div className="container px-4 md:px-6">
            <div className="mx-auto w-full max-w-3xl">
              <Card className="shadow-2xl border-t-4 border-blue-600 dark:bg-slate-900">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">هل أنت مستعد لبدء مشروعك؟</CardTitle>
                  <CardDescription className="text-slate-500 dark:text-slate-400 text-lg">
                    املأ النموذج أدناه، ودعنا نتولى الباقي.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction as any} className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="applicant-name">الاسم الكامل</Label>
                        <Input id="applicant-name" name="applicantName" placeholder="مثال: محمد عبدالله" />
                        {state.errors?.applicantName && (
                          <p className="text-red-500 text-sm">{state.errors.applicantName[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الجوال</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="9665xxxxxxx+" />
                        {state.errors?.phone && <p className="text-red-500 text-sm">{state.errors.phone[0]}</p>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" name="email" type="email" placeholder="email@example.com" />
                        {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">الجنسية</Label>
                        <Input id="nationality" name="nationality" placeholder="مثال: سعودي" />
                        {state.errors?.nationality && (
                          <p className="text-red-500 text-sm">{state.errors.nationality[0]}</p>
                        )}
                      </div>
                    </div>
                    <hr className="my-2 border-slate-200 dark:border-slate-700" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">اسم الشركة المقترح</Label>
                        <Input id="company-name" name="companyName" placeholder="شركة الابتكار المتحدة" />
                        {state.errors?.companyName && (
                          <p className="text-red-500 text-sm">{state.errors.companyName[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-type">نوع الشركة</Label>
                        <Select name="companyType">
                          <SelectTrigger id="company-type">
                            <SelectValue placeholder="اختر النوع" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="llc">ذات مسؤولية محدودة</SelectItem>
                            <SelectItem value="sole">مؤسسة فردية</SelectItem>
                            <SelectItem value="partnership">شركة تضامن</SelectItem>
                            <SelectItem value="joint-stock">شركة مساهمة</SelectItem>
                          </SelectContent>
                        </Select>
                        {state.errors?.companyType && (
                          <p className="text-red-500 text-sm">{state.errors.companyType[0]}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partners-count">عدد الشركاء (إن وجد)</Label>
                      <Input id="partners-count" name="partnersCount" type="number" min="1" placeholder="1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activity-description">وصف مختصر لنشاط الشركة</Label>
                      <Textarea
                        id="activity-description"
                        name="activityDescription"
                        placeholder="مثال: تطوير برمجيات، تجارة إلكترونية، استشارات إدارية..."
                      />
                      {state.errors?.activityDescription && (
                        <p className="text-red-500 text-sm">{state.errors.activityDescription[0]}</p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="id-card-front">صورة الهوية (الجهة الأمامية)</Label>
                        <FileUpload name="idCardFront" />
                        {state.errors?.idCardFront && (
                          <p className="text-red-500 text-sm">{state.errors.idCardFront[0]}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="id-card-back">صورة الهوية (الجهة الخلفية)</Label>
                        <FileUpload name="idCardBack" />
                        {state.errors?.idCardBack && (
                          <p className="text-red-500 text-sm">{state.errors.idCardBack[0]}</p>
                        )}
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isPending}
                    >
                      {isPending ? "جاري الرفع والإرسال..." : "إرسال الطلب وبدء التأسيس"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
