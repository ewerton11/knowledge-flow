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
      <main className="w-1/2 ml-[23%] border-r border-gray-200 flex flex-col justify-center items-center relative">
        <div className="w-full h-[30%] flex flex-col justify-center items-center">
          <div className="w-full h-1/2 flex justify-center items-center">
            <input
              type="text"
              placeholder="Proximo topico para aprender"
              className="w-[90%] h-[70%]"
            />
          </div>
          <div className="w-full h-[30%] border-y border-gray-200 flex justify-end items-center">
            <button className="w-24 h-3/5 bg-blue-400 mr-[5%] rounded-2xl">
              botão
            </button>
            {/* <p>aa</p> */}
          </div>
        </div>
        <div className="w-full h-[70%] overflow-y-auto">
          <div className="w-full h-[100%]">
            {/* {data.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                handleAddTopic={handleAddTopic}
              />
            ))} */}
          </div>
        </div>
      </main>
      <div>
        <h1>Categorias de estudos, tipo tecnologia, ingles etc...</h1>
      </div>
    </div>
  )
}
