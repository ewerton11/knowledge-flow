'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ITopic } from '../page'
import api from '@/lib/axios'
import NavTopic from '@/components/navTopic'
import Navbar from '@/components/navbar'
import TopicCard from '@/components/topicCard'

export default function Page() {
  const [data, setData] = useState<ITopic[]>([])

  const pathname = usePathname()
  const id = pathname.split('/').pop()

  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(id)

  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${path}/child`)
        const responseData = response.data
        setData(responseData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [path])

  const handleAddTopic = (topicId: number) => {
    setSelectedTopicId(topicId)
    router.push(`/topics/${topicId}`)
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[23%] flex flex-col justify-center items-center">
        {data.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            handleAddTopic={handleAddTopic}
          />
        ))}
      </main>
      <div>
        <h1>Categorias de estudos, tipo tecnologia, ingles etc...</h1>
      </div>
    </div>
  )
}
