import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Tools Sandbox
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of AI-powered tools and experiments. Each project showcases different capabilities of artificial intelligence.
          </p>
        </div>
        <ProjectGrid />
      </div>
    </main>
  )
}