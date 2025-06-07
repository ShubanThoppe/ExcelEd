import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a2e3b] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.ico"
                alt="ExcelEd Logo"
                width={60}
                height={60}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold">ExcelEd</span>
            </div>
            <p className="text-white/70 mb-6">
              Providing premium private tutoring services to help students achieve academic excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-[#e6c78b] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#e6c78b] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#e6c78b] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#subjects" className="text-white/70 hover:text-white transition-colors">
                  Our Subjects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subjects</h3>
            <ul className="space-y-3">
              <li>
                Mathematics
              </li>
              <li>
                Physics
              </li>
              <li>
                Chemistry
              </li>
              <li>
                Biology
              </li>
              <li>
                English
              </li>
              <li>
                Science
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#e6c78b] flex-shrink-0" />
                <span className="text-white/70">+353 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#e6c78b] flex-shrink-0" />
                <span className="text-white/70">info@ExcelEd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} ExcelEd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
