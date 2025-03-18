import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">AI Tools Sandbox</h1>
        <ProjectGrid />
      </div>
    </main>
  )
}