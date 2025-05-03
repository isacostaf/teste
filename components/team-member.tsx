import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
}

export default function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={100}
        height={100}
        className="rounded-full object-cover"
      />
      <div className="space-y-2 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-purple-600 font-medium">{role}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
