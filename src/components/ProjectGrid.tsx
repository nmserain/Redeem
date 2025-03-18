import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    name: 'AI Chat Interface',
    description: 'A modern chat interface with AI-powered responses. Experience natural conversations with our advanced language model.',
    image: '/projects/chat-interface.jpg',
    path: '/projects/chat'
  },
  {
    id: 2,
    name: 'Image Generator',
    description: 'Generate unique and creative images using state-of-the-art AI models. Turn your ideas into visual reality.',
    image: '/projects/image-generator.jpg',
    path: '/projects/image-generator'
  },
  // Add more projects here
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}