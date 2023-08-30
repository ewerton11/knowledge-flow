'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ITopic } from '../page'
import api from '@/lib/axios'
import NavTopic from '@/components/navTopic'
import Navbar from '@/components/navbar'
import TopicCard from '@/components/topicCard'
import CreateTopic from '@/components/createTopic'

export default function ChildTopic() {
  const [data, setData] = useState<ITopic[]>([])

  const pathname = usePathname()
  const id = parseInt(pathname.split('/').pop() || '', 10)

  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(id)

  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [path])

  const fetchData = async () => {
    try {
      const response = await api.get(`/Topic?id=${id}`)
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
      await api.put(`/Topic/${topicId}`, {
        title: newTitle,
      })
      await fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteTopic = async (topicId: number) => {
    try {
      await api.delete(`/Topic/${topicId}`)
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

  // const refreshTopics = async () => {
  //   try {
  //     const response = await api.get(`${path}/child`)
  //     const responseData = response.data
  //     setData(responseData)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[23%] border-r border-gray-200 flex flex-col justify-center items-center relative">
        <CreateTopic refreshTopics={fetchData} parentId={id} />
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
