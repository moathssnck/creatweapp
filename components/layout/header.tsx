"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Briefcase, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  const navLinks = [
    { href: "#features", label: "خدماتنا" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#faq", label: "الأسئلة الشائعة" },
  ]

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <Link href="#" className="flex items-center justify-center gap-2" aria-label="Home">
        <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-500" />
        <span className="font-bold text-lg">الخبراء للتأسيس</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ms-auto hidden md:flex gap-4 sm:gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="#form">ابدأ الآن</Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="ms-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  <Link href="#form">ابدأ الآن</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
