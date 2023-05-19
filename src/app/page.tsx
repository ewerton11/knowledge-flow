'use client'

import Navbar from '@/components/navbar'
import Image from 'next/image'
import Idea from '../../public/images/idea.png'
import { useState, useEffect } from 'react'
import api from '@/lib/axios'

interface ITopic {
  id: number
  title: string
}

export default function Home() {
  const [data, setData] = useState<ITopic[]>([])
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/')
        const responseData = response.data
        setData(responseData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleTopicClick = (topicId: number) => {
    if (selectedTopicId === topicId) {
      setSelectedTopicId(null)
    } else {
      setSelectedTopicId(topicId)
    }
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="w-1/2 ml-[20%] flex flex-col items-center">
        <div className="w-full h-20">
          <h1>Ola Ewerton</h1>
        </div>
        {data.map((topic: ITopic) => {
          return (
            <>
              <div
                key={topic.id}
                className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between"
              >
                <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
                  <Image
                    src={Idea}
                    width={300}
                    height={300}
                    alt="Image of an idea"
                    className="w-2/3 h-2/3"
                  />
                </div>
                <div className="w-[13%] flex items-center justify-center">
                  <p className="text-gray-500 font-sans text-2xl">+</p>
                </div>
                <div
                  className="w-[67%] flex items-center text-blue-600 font-sans cursor-pointer"
                  onClick={() => handleTopicClick(topic.id)}
                >
                  <p>{topic.title}</p>
                </div>
                <div className="w-1/5 flex items-center text-gray-500 font-sans">
                  <p>12/05/2023</p>
                </div>
              </div>
              {selectedTopicId === topic.id && (
                <div className="w-[65%] border-l-4 border-gray-400">
                  <p className="p-5 font-sans">
                    <span className="text-blue-800">(22)</span> Sub-tarefas
                  </p>
                  <p className="p-5 font-sans">
                    <span className="text-blue-800">(5/22)</span> Sub-tarefas
                    concluidas
                  </p>
                </div>
              )}
            </>
          )
        })}
      </main>
      <div>
        <h1>Categorias de estudos, tipo tecnologia, ingles etc...</h1>
      </div>
    </div>
  )
}
