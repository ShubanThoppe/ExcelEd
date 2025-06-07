import Image from "next/image"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TestimonialsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="bg-[#0a2e3b] text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Testimonials</h1>
                        <p className="text-xl text-white/80">
                            Hear from our students about their experiences and academic achievements with ExcelEd.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0a2e3b]">Success Stories</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our students have achieved remarkable results through our personalized tutoring approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Testimonial 1 - Sarah O'Connor */}
                    <Card className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Sarah O'Connor"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">
                                    "The tutoring I received helped me improve my maths grade from a C to an A. The personalized approach made all the difference."
                                </p>
                                <div>
                                    <h4 className="font-semibold text-[#0a2e3b]">Sarah O'Connor</h4>
                                    <p className="text-sm text-gray-500">St. Mary's Secondary School</p>
                                    <p className="text-sm text-[#0a2e3b] mt-1">
                                        Subject: <span className="text-[#e6c78b] font-medium">Mathematics</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Testimonial 2 - James Murphy */}
                    <Card className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="James Murphy"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">
                                    "I struggled with physics for years until I started with ExcelEd. The concepts are now clear, and I feel confident going into my exams."
                                </p>
                                <div>
                                    <h4 className="font-semibold text-[#0a2e3b]">James Murphy</h4>
                                    <p className="text-sm text-gray-500">Blackrock College</p>
                                    <p className="text-sm text-[#0a2e3b] mt-1">
                                        Subject: <span className="text-[#e6c78b] font-medium">Physics</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Testimonial 3 - Emma Walsh */}
                    <Card className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Emma Walsh"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">
                                    "The biology tutoring was exceptional. Complex topics were broken down in a way that made them easy to understand and remember."
                                </p>
                                <div>
                                    <h4 className="font-semibold text-[#0a2e3b]">Emma Walsh</h4>
                                    <p className="text-sm text-gray-500">Alexandra College</p>
                                    <p className="text-sm text-[#0a2e3b] mt-1">
                                        Subject: <span className="text-[#e6c78b] font-medium">Biology</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Testimonial 4 - Aoife Kelly */}
                    <Card className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Aoife Kelly"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">
                                    "The chemistry tutoring at ExcelEd transformed my understanding of the subject. Complex concepts were broken down in a way that made them easy to grasp. My tutor was patient and adapted to my learning style. I went from barely passing to achieving an H1 in my final exams."
                                </p>
                                <div>
                                    <h4 className="font-semibold text-[#0a2e3b]">Aoife Kelly</h4>
                                    <p className="text-sm text-gray-500">Loreto College, Dublin</p>
                                    <p className="text-sm text-[#0a2e3b] mt-1">
                                        Subject: <span className="text-[#e6c78b] font-medium">Chemistry</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Testimonial 5 - David Murphy */}
                    <Card className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="David Murphy"
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#e6c78b] fill-[#e6c78b]" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">
                                    "I was struggling with Higher Level Mathematics and was considering dropping to Ordinary Level. After just two months with ExcelEd, my confidence improved dramatically. I not only stayed with Higher Level but achieved an H2 in my Leaving Cert. The personalized approach made all the difference."
                                </p>
                                <div>
                                    <h4 className="font-semibold text-[#0a2e3b]">David Murphy</h4>
                                    <p className="text-sm text-gray-500">St. Michael's College, Dublin</p>
                                    <p className="text-sm text-[#0a2e3b] mt-1">
                                        Subject: <span className="text-[#e6c78b] font-medium">Mathematics</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}
