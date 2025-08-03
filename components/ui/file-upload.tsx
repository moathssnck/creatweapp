"use client"

import { useState, type ChangeEvent } from "react"
import { UploadCloud, FileIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  name: string
}

export function FileUpload({ name }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    // Reset the input value
    const input = document.getElementById(name) as HTMLInputElement
    if (input) {
      input.value = ""
    }
  }

  return (
    <div>
      <label
        htmlFor={name}
        className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        {!file ? (
          <>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-8 h-8 mb-4 text-slate-500 dark:text-slate-400" />
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold">انقر للرفع</span> أو اسحب وأفلت الملف
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">PDF, PNG, JPG (بحد أقصى 5 ميجا)</p>
            </div>
            <input
              id={name}
              name={name}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
              <FileIcon className="w-8 h-8 text-blue-500" />
              <div className="text-right">
                <p className="font-semibold text-sm truncate max-w-xs">{file.name}</p>
                <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <Button type="button" variant="ghost" size="icon" className="text-red-500" onClick={handleRemoveFile}>
                <X className="w-5 h-5" />
                <span className="sr-only">إزالة الملف</span>
              </Button>
            </div>
          </div>
        )}
      </label>
    </div>
  )
}
