import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, Award, Star, Calendar, Check, BookOpen } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import Link from "next/link"
import SubjectsSection from "@/components/subjects-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0a2e3b] text-white">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Excellence in Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your Academic <span className="text-[#e6c78b]">Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                Personalized tutoring services designed to help you excel in your studies and achieve your academic
                goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" passHref>
                  <Button
                    size="lg"
                    className="bg-[#e6c78b] hover:bg-[#d4b67a] text-[#0a2e3b] font-medium"
                  >
                    Book a Session
                  </Button>
                </Link>
                <Link href="/#subjects" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/10"
                  >
                    Explore Subjects <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#e6c78b]/20 p-2">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#e6c78b]/30">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="ExcelEd Tutor"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-4 top-10 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                    <span className="font-bold text-[#0a2e3b]">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-500">Student Rating</p>
                </div>
                <div className="absolute -left-4 bottom-10 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#0a2e3b]" />
                    <span className="font-bold text-[#0a2e3b]">20+</span>
                  </div>
                  <p className="text-xs text-gray-500">Students Taught</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Logo and Introduction */}
      <section className="autoShow  py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            <Image
              src="/logo.ico"
              alt="ExcelEd Logo"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0a2e3b]">Welcome to ExcelEd</h2>
            <p className="text-gray-600 leading-relaxed">
              At ExcelEd, we believe that every student has the potential to excel academically. Our personalized
              approach to education focuses on understanding your unique learning style and tailoring our teaching
              methods to help you achieve your goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience and a passion for teaching, we provide high-quality private grinds across a range
              of subjects, ensuring you receive the support you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <SubjectsSection />


      {/* Why Choose Us */}
      <section className="autoShow  py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2e3b]">Why Choose ExcelEd</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a premium tutoring experience that delivers results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-[#0a2e3b]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Experienced Tutors</h3>
            <p className="text-gray-600">
              Our tutors are highly qualified with proven track records of helping students achieve academic excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-[#0a2e3b]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Personalized Approach</h3>
            <p className="text-gray-600">
              We tailor our teaching methods to match your learning style, ensuring you grasp concepts effectively.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-[#0a2e3b]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Book sessions at times that work for you, with options for both in-person and online tutoring.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e3b]">Our Pricing</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Transparent, competitive pricing for high-quality tutoring across all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Junior Cert Pricing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-2">Junior Cert</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#0a2e3b]">€30</span>
                <span className="text-gray-500 ml-1">/ hour</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for Junior Cycle students looking to build strong foundations in their subjects.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  All Junior Cert subjects
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Personalized learning approach
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Study materials included
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Progress tracking
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-[#0a2e3b] hover:bg-[#0a2e3b]/90 text-white">Book Session</Button>
              </Link>
            </div>

            {/* Leaving Cert Pricing */}
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#e6c78b] text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#e6c78b] text-[#0a2e3b] px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-2 ">Leaving Cert</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#0a2e3b]">€35</span>
                <span className="text-gray-500 ml-1">/ hour</span>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive preparation for Leaving Certificate examinations across all subjects.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  All Leaving Cert subjects
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Exam-focused strategies
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Past papers & mock exams
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  University application guidance
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-[#e6c78b] hover:bg-[#d4b67a] text-[#0a2e3b] font-medium ">
                  Book Session
                </Button>
              </Link>
            </div>

            {/* HPAT Pricing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-2">HPAT Preparation</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#0a2e3b]">€45</span>
                <span className="text-gray-500 ml-1">/ hour</span>
              </div>
              <p className="text-gray-600 mb-6">
                Specialized preparation for the Health Professions Admission Test for medical school entry.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  All HPAT sections covered
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Timing strategies
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Expert guidance & techniques
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-[#e6c78b] flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#0a2e3b]" />
                  </div>
                  Medical school application support
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-[#0a2e3b] hover:bg-[#0a2e3b]/90 text-white">Book Session</Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              All sessions include personalized study materials and progress tracking.
              <Link href="/contact" className="text-[#0a2e3b] hover:underline ml-1">
                Contact us for package deals and group rates.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" py-16 bg-[#0a2e3b] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Students Say</h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              Hear from students who have transformed their academic performance with ExcelEd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Gavin"
              image="/placeholder.svg?height=100&width=100"
              quote="Anish is a great tutor that cares for your growth in academics while fairly pricing his grinds. Criminally underrated and would definitely recommend."
              subject="Mathematics"
            />
            <TestimonialCard
              name="Drey"
              image="/placeholder.svg?height=100&width=100"
              quote="Incredible knowledge on every topic, very personal lessons and understands where students need to improve and what they are good at. Student-focused lessons."
              subject="Physics"
            />
            <TestimonialCard
              name="Akhil"
              image="/placeholder.svg?height=100&width=100"
              quote="I started doing chemistry grinds with Anish at the start of 6th year and I can really see an improvement in my grades."
              subject="Chemistry"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              <Link href="/testimonials" className="flex items-center">
                Read More Testimonials
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" autoShow py-16 container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0a2e3b] to-[#164352] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Studies?</h2>
            <p className="text-xl text-white/80 mb-8">
              Book your first session today and take the first step towards academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#e6c78b] hover:bg-[#d4b67a] text-[#0a2e3b] font-medium">
                <Link href="/contact"> {/* Add the Link component wrapping the Button */}
                  Book a Session
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
