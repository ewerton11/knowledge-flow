'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ITopic } from '../page'
import api from '@/lib/axios'
import NavTopic from '@/components/navTopic'
import Navbar from '@/components/navbar'
import TopicCard from '@/components/topicCard'
import CreateTopic from '@/components/createTopic'

export default function Page() {
  const [data, setData] = useState<ITopic[]>([])

  const pathname = usePathname()
  const id = parseInt(pathname.split('/').pop() || '', 10)

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

  const refreshTopics = async () => {
    try {
      const response = await api.get(`${path}/child`)
      const responseData = response.data
      setData(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[23%] flex flex-col justify-center items-center">
        <CreateTopic
          refreshTopics={refreshTopics}
          isChildTopic={true}
          parentId={selectedTopicId}
        />
        <div className="w-full h-auto min-h-screen">
          <div className="w-full h-[100%]">
            {data.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                handleAddTopic={handleAddTopic}
              />
            ))}
          </div>
        </div>
      </main>
      <div>
        <h1>Categorias de estudos, tipo tecnologia, ingles etc...</h1>
      </div>
    </div>
  )
}
