import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Brain,
    Clock,
    Target,
    BookOpen,
    Users,
    Award,
    CheckCircle,
    TrendingUp,
    Calendar,
    ChevronRight,
    Play,
    Download,
    FileText,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TestimonialCard from "@/components/testimonial-card"

export default function HPATPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="bg-[#0a2e3b] text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-sm font-medium">Medical School Preparation</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                HPAT <span className="text-[#e6c78b]">Preparation</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 max-w-xl">
                                Expert preparation for the Health Professions Admission Test. Maximize your chances of getting into
                                medical school with our specialized HPAT tutoring program.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-[#e6c78b] hover:bg-[#d4b67a] text-[#0a2e3b] font-medium">
                                        Start HPAT Prep
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-80 h-80 rounded-xl bg-[#e6c78b]/20 p-4">
                                <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-[#e6c78b]/30">
                                    <Image
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="HPAT Preparation"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -right-4 top-10 bg-white rounded-lg shadow-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <Target className="h-5 w-5 text-[#e6c78b]" />
                                        <span className="font-bold text-[#0a2e3b]">95%</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Success Rate</p>
                                </div>
                                <div className="absolute -left-4 bottom-10 bg-white rounded-lg shadow-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-[#0a2e3b]" />
                                        <span className="font-bold text-[#0a2e3b]">200+</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Students Placed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is HPAT */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#0a2e3b]">What is the HPAT?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Health Professions Admission Test (HPAT) is a standardized test used by Irish universities to assess
                            candidates applying for undergraduate health science programs, including Medicine, Dentistry, Veterinary
                            Medicine, and other health-related courses.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The HPAT is designed to test logical reasoning and problem-solving skills rather than academic knowledge.
                            It consists of three sections that evaluate different cognitive abilities essential for success in health
                            professions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <Brain className="h-8 w-8 text-[#0a2e3b] mx-auto mb-2" />
                                <h4 className="font-semibold text-[#0a2e3b] mb-1">Section 1</h4>
                                <p className="text-sm text-gray-600">Logical Reasoning & Problem Solving</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <Target className="h-8 w-8 text-[#0a2e3b] mx-auto mb-2" />
                                <h4 className="font-semibold text-[#0a2e3b] mb-1">Section 2</h4>
                                <p className="text-sm text-gray-600">Interpersonal Understanding</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <BookOpen className="h-8 w-8 text-[#0a2e3b] mx-auto mb-2" />
                                <h4 className="font-semibold text-[#0a2e3b] mb-1">Section 3</h4>
                                <p className="text-sm text-gray-600">Non-Verbal Reasoning</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/placeholder.svg?height=600&width=800"
                            alt="HPAT Test Structure"
                            width={800}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* HPAT Sections Detailed */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0a2e3b]">HPAT Test Sections</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Understanding each section of the HPAT is crucial for effective preparation and success.
                        </p>
                    </div>

                    <Tabs defaultValue="section1" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-white shadow-md rounded-xl overflow-hidden">
                                <TabsTrigger value="section1" className="text-sm md:text-base px-4 py-2 transition-all duration-300 ease-in-out data-[state=active]:bg-[#e6c78b] data-[state=active]:text-[#0a2e3b] data-[state=active]:font-semibold">
                                    Section 1
                                </TabsTrigger>
                                <TabsTrigger value="section2" className="text-sm md:text-base px-4 py-2 transition-all duration-300 ease-in-out data-[state=active]:bg-[#e6c78b] data-[state=active]:text-[#0a2e3b] data-[state=active]:font-semibold">
                                    Section 2
                                </TabsTrigger>
                                <TabsTrigger value="section3" className="text-sm md:text-base px-4 py-2 transition-all duration-300 ease-in-out data-[state=active]:bg-[#e6c78b] data-[state=active]:text-[#0a2e3b] data-[state=active]:font-semibold">
                                    Section 3
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="section1">
                            <Card className="bg-white p-8 shadow-sm border border-gray-100">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0a2e3b] mb-4">
                                            Section 1: Logical Reasoning & Problem Solving
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            This section tests your ability to think logically, solve problems, and understand relationships
                                            between different concepts. It includes questions on sequences, patterns, and logical deductions.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Pattern Recognition</h4>
                                                    <p className="text-gray-600 text-sm">
                                                        Identifying sequences and patterns in numbers, shapes, and symbols
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Logical Deduction</h4>
                                                    <p className="text-gray-600 text-sm">
                                                        Drawing conclusions from given premises and statements
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Problem Solving</h4>
                                                    <p className="text-gray-600 text-sm">
                                                        Analytical thinking and systematic approach to complex problems
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-[#0a2e3b] mb-3">Section Details</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Duration:</span>
                                                <span className="font-medium">72 minutes</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Questions:</span>
                                                <span className="font-medium">44 questions</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Question Types:</span>
                                                <span className="font-medium">Multiple choice</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Weighting:</span>
                                                <span className="font-medium">40% of total score</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="section2">
                            <Card className="bg-white p-8 shadow-sm border border-gray-100">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0a2e3b] mb-4">Section 2: Interpersonal Understanding</h3>
                                        <p className="text-gray-600 mb-6">
                                            This section evaluates your ability to understand people, their emotions, motivations, and social
                                            situations. It's particularly relevant for healthcare professionals who need strong interpersonal
                                            skills.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Emotional Intelligence</h4>
                                                    <p className="text-gray-600 text-sm">Understanding emotions and their impact on behavior</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Social Dynamics</h4>
                                                    <p className="text-gray-600 text-sm">Analyzing relationships and social interactions</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Communication Skills</h4>
                                                    <p className="text-gray-600 text-sm">Understanding verbal and non-verbal communication</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-[#0a2e3b] mb-3">Section Details</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Duration:</span>
                                                <span className="font-medium">30 minutes</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Questions:</span>
                                                <span className="font-medium">18 questions</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Question Types:</span>
                                                <span className="font-medium">Multiple choice</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Weighting:</span>
                                                <span className="font-medium">30% of total score</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="section3">
                            <Card className="bg-white p-8 shadow-sm border border-gray-100">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0a2e3b] mb-4">Section 3: Non-Verbal Reasoning</h3>
                                        <p className="text-gray-600 mb-6">
                                            This section tests your spatial awareness, visual processing, and ability to understand and
                                            manipulate visual information. These skills are essential for medical procedures and diagnostics.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Spatial Awareness</h4>
                                                    <p className="text-gray-600 text-sm">Understanding 3D objects and their relationships</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Visual Processing</h4>
                                                    <p className="text-gray-600 text-sm">Interpreting diagrams, charts, and visual data</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-[#e6c78b] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-[#0a2e3b]">Pattern Analysis</h4>
                                                    <p className="text-gray-600 text-sm">Identifying visual patterns and sequences</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <h4 className="font-semibold text-[#0a2e3b] mb-3">Section Details</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Duration:</span>
                                                <span className="font-medium">45 minutes</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Questions:</span>
                                                <span className="font-medium">29 questions</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Question Types:</span>
                                                <span className="font-medium">Multiple choice</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Weighting:</span>
                                                <span className="font-medium">30% of total score</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Our HPAT Program */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0a2e3b]">Our HPAT Preparation Program</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Comprehensive preparation designed to maximize your HPAT score and secure your place in medical school.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <Target className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Targeted Practice</h3>
                        <p className="text-gray-600">
                            Section-specific practice with hundreds of questions similar to those on the actual HPAT exam.
                        </p>
                    </Card>

                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Time Management</h3>
                        <p className="text-gray-600">
                            Learn proven strategies for managing time effectively across all three sections of the HPAT.
                        </p>
                    </Card>

                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Score Improvement</h3>
                        <p className="text-gray-600">
                            Track your progress with regular mock tests and receive detailed feedback on areas for improvement.
                        </p>
                    </Card>

                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <Brain className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Cognitive Training</h3>
                        <p className="text-gray-600">
                            Develop the specific cognitive skills tested in each section through targeted exercises and techniques.
                        </p>
                    </Card>

                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Expert Tutors</h3>
                        <p className="text-gray-600">
                            Learn from tutors who have achieved high HPAT scores themselves and understand the test inside out.
                        </p>
                    </Card>

                    <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#0a2e3b]/10 rounded-full flex items-center justify-center mb-4">
                            <Award className="h-6 w-6 text-[#0a2e3b]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#0a2e3b] mb-3">Application Support</h3>
                        <p className="text-gray-600">
                            Guidance on medical school applications, personal statements, and interview preparation.
                        </p>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0a2e3b]">Frequently Asked Questions</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Common questions about HPAT preparation and our tutoring program.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200">
                                <AccordionTrigger className="px-6 py-4 text-[#0a2e3b] font-medium hover:no-underline">
                                    When should I start preparing for the HPAT?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    We recommend starting HPAT preparation at least 3-6 months before the test date. This allows
                                    sufficient time to develop the cognitive skills tested and complete multiple practice tests. However,
                                    intensive preparation can also be effective with shorter timeframes.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200">
                                <AccordionTrigger className="px-6 py-4 text-[#0a2e3b] font-medium hover:no-underline">
                                    What HPAT score do I need for medical school?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    HPAT score requirements vary by university and change each year based on competition. Generally,
                                    you'll need to score in the top 10-20% (80th percentile or higher) to be competitive for most medical
                                    programs. We'll help you set realistic target scores based on your preferred universities.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200">
                                <AccordionTrigger className="px-6 py-4 text-[#0a2e3b] font-medium hover:no-underline">
                                    Can I retake the HPAT if I'm not satisfied with my score?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    Yes, you can retake the HPAT, but there are restrictions. You must wait at least one year before
                                    retaking, and universities will typically consider your most recent score. We help students maximize
                                    their first attempt to avoid the need for retaking.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200">
                                <AccordionTrigger className="px-6 py-4 text-[#0a2e3b] font-medium hover:no-underline">
                                    Do you offer online HPAT tutoring?
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    Yes, we offer both in-person and online HPAT tutoring. Our online sessions use interactive platforms
                                    that allow for effective practice of all HPAT question types, including visual and spatial reasoning
                                    questions.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 container mx-auto px-4">
                <div className="bg-gradient-to-r from-[#0a2e3b] to-[#164352] rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace the HPAT?</h2>
                        <p className="text-xl text-white/80 mb-8">
                            Start your journey to medical school with our expert HPAT preparation program.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-[#e6c78b] hover:bg-[#d4b67a] text-[#0a2e3b] font-medium">
                                    Book HPAT Session
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
