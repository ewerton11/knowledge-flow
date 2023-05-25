'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/axios'
import Navbar from '@/components/navbar'
import NavTopic from '@/components/navTopic'
import TopicCard from '@/components/topicCard'

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
      <main className="w-1/2 ml-[25%] flex flex-col items-center relative">
        <div className="w-full h-20">
          <h1>Ola Ewerton</h1>
        </div>
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
