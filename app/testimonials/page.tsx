import Image from "next/image"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: "Gavin",
            quote:
                "Anish is a great tutor that cares for your growth in academics while fairly pricing his grinds. Criminally underrated and would definitely recommend.",
        },
        {
            name: "Drey",
            quote:
                "Incredible knowledge on every topic, very personal lessons and understands where students need to improve and what they are good at. Student-focused lessons.",
        },
        {
            name: "Akhil",
            quote:
                "I started doing chemistry grinds with Anish at the start of 6th year and I can really see an improvement in my grades.",
        },
        {
            name: "Ben",
            quote:
                "I highly recommend Anish for grinds. They are patient, knowledgeable, and tailor lessons to help students succeed.",
        },
        {
            name: "Abhilash",
            quote:
                "Anish really helped me with chemistry. He's patient and answers all my questions clearly. Highly recommend Anish for grinds.",
        },
        {
            name: "Louisa",
            quote:
                "Anish is an amazing tutor. He effortlessly breaks down complex concepts into easily understandable segments using pure logic and simple analogies. Every class is centred on the needs of the student.",
        },
    ]

    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="bg-[#0a2e3b] text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Testimonials</h1>
                        <p className="text-xl text-white/80">
                            Hear from our students about their experiences and academic achievements with Anish Grinds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0a2e3b]">Success Stories</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our students have achieved remarkable results through our personalized tutoring approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#e6c78b]/30 flex-shrink-0 mx-auto md:mx-0">
                                    <Image
                                        src="/placeholder.svg?height=200&width=200"
                                        alt={testimonial.name}
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
                                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                    <div>
                                        <h4 className="font-semibold text-[#0a2e3b]">{testimonial.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}
