"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import SubjectCard from "@/components/subject-card"
import { BookOpen } from "lucide-react"

const subjects = [
    {
        title: "Mathematics",
        description:
            "From algebra to calculus, our expert tutors will help you master mathematical concepts and problem-solving techniques.",
        level: "Both",
    },
    {
        title: "Physics",
        description:
            "Understand complex physics principles through practical examples and clear explanations tailored to your learning style.",
        level: "Leaving Cert",
    },
    {
        title: "Chemistry",
        description:
            "Master chemical concepts, formulas, and reactions with our structured approach to learning chemistry.",
        level: "Leaving Cert",
    },
    {
        title: "Biology",
        description:
            "Explore the fascinating world of biology with comprehensive lessons covering all curriculum requirements.",
        level: "Leaving Cert",
    },
    {
        title: "English",
        description:
            "Develop strong writing skills, critical analysis, and comprehensive understanding of literature and language.",
        level: "Both",
    },
    {
        title: "Science",
        description:
            "Explore key concepts in physics, chemistry, and biology through engaging lessons tailored for Junior Cert students.",
        level: "Junior Cert"
    }

]

export default function SubjectsSection() {
    const [selectedLevel, setSelectedLevel] = useState<string>("All")

    const filteredSubjects = subjects.filter((subject) => {
        if (selectedLevel === "All") return true
        if (subject.level === "Both") return true
        return subject.level === selectedLevel
    })

    return (
        <section id="subjects" className="py-16 bg-[#0a2e3b] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Our Subjects</h2>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        We offer comprehensive tutoring across a wide range of subjects to help you excel in your studies.
                    </p>
                </div>

                <div className="flex justify-center mb-10">
                    <ToggleGroup
                        type="single"
                        value={selectedLevel}
                        onValueChange={(val) => setSelectedLevel(val || "All")}
                        className="bg-white/10 p-1 rounded-full"
                    >
                        <ToggleGroupItem value="All" className="text-white px-4 py-2 rounded-full">
                            All
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Junior Cert" className="text-white px-4 py-2 rounded-full">
                            Junior Cert
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Leaving Cert" className="text-white px-4 py-2 rounded-full">
                            Leaving Cert
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSubjects.map((subject, index) => (
                        <SubjectCard
                            key={index}
                            icon={<BookOpen className="h-8 w-8 text-[#0a2e3b]" />}
                            title={subject.title}
                            description={subject.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
