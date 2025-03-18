import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    name: 'AI Chat Interface',
    description: 'Experience natural conversations with our advanced language model. Test different personas and conversation styles.',
    image: '/projects/chat-interface.png',
    path: '/projects/chat'
  },
  {
    id: 2,
    name: 'Image Generator',
    description: 'Create unique images from text descriptions using state-of-the-art AI models. Perfect for creative projects.',
    image: '/projects/image-generator.png',
    path: '/projects/image-generator'
  },
  {
    id: 3,
    name: 'Code Assistant',
    description: 'Get help with coding tasks, debugging, and code optimization using AI-powered analysis.',
    image: '/projects/code-assistant.png',
    path: '/projects/code-assistant'
  }
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}