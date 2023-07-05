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
  createdAt: string
  isChecked: boolean
}

export default function Topics() {
  const [data, setData] = useState<ITopic[]>([])
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)

  const router = useRouter()

  // const handleTopicClick = (topicId: number) => {
  //   if (topicInfoId === topicId) {
  //     setTopicInfoId(null)
  //   } else {
  //     setTopicInfoId(topicId)
  //   }
  // }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await api.get('/topics')
      const responseData = response.data
      setData(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddTopic = (topicId: number) => {
    setSelectedTopicId(topicId)
    router.push(`/topics/${topicId}`)
  }

  const handleUpdateTopic = async (topicId: number, newTitle: string) => {
    try {
      await api.put(`/topics/${topicId}`, {
        title: newTitle,
      })
      await fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteTopic = async (topicId: number) => {
    try {
      await api.delete(`/topics/${topicId}`)
      await fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  const handleCheckingTopic = async (topicId: number) => {
    try {
      await api.put(`/topics/${topicId}/check`)
      await fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[23%] border-r border-gray-200 flex flex-col justify-center items-center relative">
        <CreateTopic refreshTopics={fetchData} />
        <div className="w-full h-auto flex-1">
          <div className="w-full h-auto">
            {data.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                handleAddTopic={handleAddTopic}
                handleUpdateTopic={handleUpdateTopic}
                handleDeleteTopic={handleDeleteTopic}
                handleCheckingTopic={handleCheckingTopic}
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
