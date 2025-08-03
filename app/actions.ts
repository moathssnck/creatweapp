
import { z } from "zod"

export interface FormState {
  message: string
  errors?: {
    applicantName?: string
    phone?: string
    email?: string
    nationality?: string
    companyName?: string
    companyType?: string
    activityDescription?: string
    idCardFront?: string
    idCardBack?: string
  }
  success: boolean
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/pdf"]

const fileSchema = z
  .any()
  .refine((file) => file?.size > 0, "الملف مطلوب.")
  .refine((file) => file?.size <= MAX_FILE_SIZE, `الحد الأقصى لحجم الملف هو 5 ميجا.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "صيغ الملفات المقبولة هي .jpg, .jpeg, .png and .pdf فقط.",
  )

const formSchema = z.object({
  applicantName: z.string().min(3, "الاسم الكامل مطلوب."),
  phone: z.string().min(9, "رقم هاتف صحيح مطلوب."),
  email: z.string().email("بريد إلكتروني صحيح مطلوب."),
  nationality: z.string().min(2, "الجنسية مطلوبة."),
  companyName: z.string().min(3, "اسم الشركة المقترح مطلوب."),
  companyType: z.string({ required_error: "الرجاء اختيار نوع الشركة." }),
  partnersCount: z.coerce.number().optional(),
  activityDescription: z.string().min(10, "يرجى تقديم وصف لا يقل عن 10 أحرف."),
  idCardFront: fileSchema,
  idCardBack: fileSchema,
})

/**
 * Uploads a file to ImgBB and returns the image URL.
 * @param file The file to upload.
 * @returns The URL of the uploaded image, or null if the upload fails.
 */
async function uploadToImgBB(file: File): Promise<string | null> {
  const apiKey = process.env.IMGBB_API_KEY
  if (!apiKey) {
    console.error("ImgBB API key is not set.")
    return null
  }

  try {
    const formData = new FormData()
    formData.append("image", file)

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      console.error("ImgBB upload failed:", await response.text())
      return null
    }

    const result = await response.json()
    return result.data.url
  } catch (error) {
    console.error("Error uploading to ImgBB:", error)
    return null
  }
}

export async function handleFormSubmission(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!process.env.IMGBB_API_KEY) {
    return {
      message: "خطأ في إعدادات الخادم. لا يمكن رفع الصور حالياً.",
      errors: {},
      success: false,
    }
  }

  const validatedFields = formSchema.safeParse({
    applicantName: formData.get("applicantName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    nationality: formData.get("nationality"),
    companyName: formData.get("companyName"),
    companyType: formData.get("companyType"),
    partnersCount: formData.get("partnersCount"),
    activityDescription: formData.get("activityDescription"),
    idCardFront: formData.get("idCardFront"),
    idCardBack: formData.get("idCardBack"),
  })

  if (!validatedFields.success) {
    return {
      message: "فشلت عملية التحقق من البيانات.",
      errors: validatedFields.error.flatten().fieldErrors as any,
      success: false,
    }
  }

  const { idCardFront, idCardBack } = validatedFields.data

  try {
    // Upload images concurrently
    const [frontImageUrl, backImageUrl] = await Promise.all([uploadToImgBB(idCardFront), uploadToImgBB(idCardBack)])

    if (!frontImageUrl || !backImageUrl) {
      return {
        message: "حدث خطأ أثناء رفع صور الهوية. يرجى المحاولة مرة أخرى.",
        errors: {},
        success: false,
      }
    }

    // Now you have the URLs, you can save them to your database
    console.log("Form submitted successfully!")
    console.log("Applicant Name:", validatedFields.data.applicantName)
    console.log("Front ID URL:", frontImageUrl)
    console.log("Back ID URL:", backImageUrl)
    // ... (save other form data and URLs to your DB)

    return {
      message: "تم استلام طلبك ورفع المستندات بنجاح! سنتواصل معك قريباً.",
      errors: {},
      success: true,
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      message: "حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.",
      errors: {},
      success: false,
    }
  }
}
