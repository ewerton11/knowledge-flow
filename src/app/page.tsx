'use client'

import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'

export default function Page() {
  const router = useRouter()

  router.push('/topics')

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="w-4/5">
        <h1>Barra</h1>
      </main>
    </div>
  )
}
