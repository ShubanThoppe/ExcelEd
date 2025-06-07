import Image from "next/image"
import { GraduationCap, Award, BookOpen, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#0a2e3b] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ExcelEd</h1>
            <p className="text-xl text-white/80">
              Dedicated to academic excellence and personalized education since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-[#0a2e3b]">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              ExcelEd was founded with a simple mission: to provide high-quality, personalized tutoring that helps
              students reach their full academic potential. What began as a small tutoring service has grown into a
              trusted educational partner for students across Ireland.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our founder, Anish Patel, started the company after recognizing a gap in the educational system. Many
              students were struggling not because they lacked ability, but because they needed a different approach to
              learning. This insight led to the development of our personalized tutoring methodology that adapts to each
              student's unique learning style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to uphold our founding principles while expanding our services to reach more students
              and subjects. Our team of dedicated tutors shares our passion for education and commitment to student
              success.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ExcelEd Founder"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2e3b]">Our Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These core principles guide everything we do at ExcelEd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of our tutoring, from the quality of our teaching to the
                resources we provide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Personalization</h3>
              <p className="text-gray-600">
                We believe that education should be tailored to the individual, recognizing that each student has unique
                needs and learning styles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-[#0a2e3b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                We are committed to ongoing professional development and staying current with educational best
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2e3b]">Meet Our Team</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our experienced tutors are passionate about education and dedicated to student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-64 relative">
              <Image src="/placeholder.svg?height=400&width=600" alt="Anish Patel" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-1">Anish Patel</h3>
              <p className="text-[#0a2e3b]/70 mb-3">Founder & Mathematics Tutor</p>
              <p className="text-gray-600 mb-4">
                With over 10 years of teaching experience and a Master's in Mathematics, Anish specializes in making
                complex concepts accessible to all students.
              </p>
              <div className="text-sm text-[#0a2e3b]/70">
                <div className="mb-1">Specialties: Higher Level Mathematics, Applied Mathematics</div>
                <div>Education: M.Sc. Mathematics, Trinity College Dublin</div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-64 relative">
              <Image src="/placeholder.svg?height=400&width=600" alt="Sarah Johnson" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-1">Sarah Johnson</h3>
              <p className="text-[#0a2e3b]/70 mb-3">Science Tutor</p>
              <p className="text-gray-600 mb-4">
                Sarah brings her industry experience as a research scientist to her tutoring, providing real-world
                context to scientific concepts.
              </p>
              <div className="text-sm text-[#0a2e3b]/70">
                <div className="mb-1">Specialties: Biology, Chemistry</div>
                <div>Education: Ph.D. Biochemistry, University College Dublin</div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-64 relative">
              <Image src="/placeholder.svg?height=400&width=600" alt="Michael O'Connor" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0a2e3b] mb-1">Michael O'Connor</h3>
              <p className="text-[#0a2e3b]/70 mb-3">Physics & Engineering Tutor</p>
              <p className="text-gray-600 mb-4">
                A former engineer turned educator, Michael excels at breaking down complex physics problems into
                manageable steps.
              </p>
              <div className="text-sm text-[#0a2e3b]/70">
                <div className="mb-1">Specialties: Physics, Applied Mathematics</div>
                <div>Education: B.Eng. Mechanical Engineering, UCD</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
