import Image from 'next/image'

type Project = {
  id: number
  name: string
  description: string
  image: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  )
}