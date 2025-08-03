"use client"

import { FormStatus } from "react-dom"
import { Button } from "@/components/ui/button"

export function SubmitButton() {
  const { pending } = FormStatus()

  return (
    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={pending}>
      {pending ? "جاري الرفع والإرسال..." : "إرسال الطلب وبدء التأسيس"}
    </Button>
  )
}
