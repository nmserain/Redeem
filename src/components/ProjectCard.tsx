import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number
  name: string
  description: string
  image: string
  path: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.path} className="block group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">{project.name}</h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}