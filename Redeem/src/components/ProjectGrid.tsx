import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    name: 'AI Chat Interface',
    description: 'A modern chat interface with AI-powered responses',
    image: '/images/chat.jpg',
  },
  {
    id: 2,
    name: 'Image Generator',
    description: 'Generate unique images using AI models',
    image: '/images/image-gen.jpg',
  },
  // Add more projects as needed
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}