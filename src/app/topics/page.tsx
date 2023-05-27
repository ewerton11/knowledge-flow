'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/axios'
import Navbar from '@/components/navbar'
import NavTopic from '@/components/navTopic'
import TopicCard from '@/components/topicCard'
import CreateTopic from '@/components/createTopic'

export interface ITopic {
  id: number
  title: string
  parentId: null | number
}

export default function Topics() {
  const [data, setData] = useState<ITopic[]>([])
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/topics')
        const responseData = response.data
        setData(responseData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  // const handleTopicClick = (topicId: number) => {
  //   if (topicInfoId === topicId) {
  //     setTopicInfoId(null)
  //   } else {
  //     setTopicInfoId(topicId)
  //   }
  // }

  const handleAddTopic = (topicId: number) => {
    setSelectedTopicId(topicId)
    router.push(`/topics/${topicId}`)
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[23%] border-r border-gray-200 flex flex-col justify-center items-center relative">
        <CreateTopic />
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
