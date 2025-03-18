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
    <Link href={project.path} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">{project.name}</h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}