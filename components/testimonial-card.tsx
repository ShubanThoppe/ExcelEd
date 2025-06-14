import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  image: string
  quote: string
  subject: string
}

export default function TestimonialCard({ name, image, quote, subject }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#e6c78b]/30">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-[#e6c78b] fill-[#e6c78b]" />
        ))}
      </div>
      <p className="text-white/80 italic mb-4">"{quote}"</p>
      <div className="text-sm text-white/60">
        Subject: <span className="text-[#e6c78b]">{subject}</span>
      </div>
    </div>
  )
}
