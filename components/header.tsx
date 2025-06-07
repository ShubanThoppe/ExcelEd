"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Subjects", href: "/#subjects" },
  { name: "HPAT", href: "/hpat" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Testimonials", href: "/testimonials" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.ico"
              alt="ExcelEd Logo"
              width={50}
              height={50}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-[#0a2e3b]">ExcelEd</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#0a2e3b] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button className="bg-[#0a2e3b] hover:bg-[#0a2e3b]/90 text-white font-medium">
              Book a Session
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GbBpeVmOFvMXUEML2xwl4SSg8ZiW9o.png"
                alt="ExcelEd Logo"
                width={50}
                height={50}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-[#0a2e3b]">ExcelEd</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-600 hover:text-[#0a2e3b]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-[#0a2e3b] hover:bg-[#0a2e3b]/90 mt-4 w-full">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
