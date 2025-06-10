import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (

    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#0a2e3b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Have questions or ready to start? We're here to help you on your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0a2e3b] mb-4">Get in Touch</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form
              action="https://formspree.io/f/xjkwajjg"
              method="POST"
              className="space-y-6"
            >
              {/* Keep all your existing form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input id="first-name" name="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input id="last-name" name="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input id="email" type="email" name="email" placeholder="Enter your email address" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input id="phone" name="phone" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject of Interest
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a2e3b] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="english">English</option>
                  <option value="business">Business Studies</option>
                  <option value="business">HPAT</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell us about your tutoring needs" rows={5} required />
              </div>

              <Button type="submit" className="w-full bg-[#0a2e3b] hover:bg-[#0a2e3b]/90 text-white font-medium">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0a2e3b] mb-4">Contact Information</h2>
              <p className="text-gray-600">Reach out to us directly using the information below.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#0a2e3b]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2e3b] mb-1">Phone Number</h3>
                  <p className="text-gray-600">+353 89 246 0860</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#0a2e3b]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2e3b] mb-1">Email Address</h3>
                  <p className="text-gray-600">info@ExcelEd.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">


              </div>
            </div>


          </div>
        </div>
      </section>
    </main>
  )
}
