import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="w-4/5">
        <h1>Home</h1>
      </main>
    </div>
  )
}
