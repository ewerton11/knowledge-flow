'use client'

import Navbar from '@/components/navbar'
import Image from 'next/image'
import Idea from '../../public/images/idea.png'
import { useState, useEffect } from 'react'
import api from '@/lib/axios'
import NavTopic from '@/components/navTopic'

interface ITopic {
  id: number
  title: string
}

export default function Home() {
  const [data, setData] = useState<ITopic[]>([])
  const [topicInfoId, setTopicInfoId] = useState<number | null>(null)
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/')
        const responseData = response.data
        setData(responseData)

        //pegar o id especifico do topico selecionado e armazenar em um estado os dados dele
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleTopicClick = (topicId: number) => {
    if (topicInfoId === topicId) {
      setTopicInfoId(null)
    } else {
      setTopicInfoId(topicId)
    }
  }

  const handleAddTopic = (topicId: number) => {
    setSelectedTopicId(topicId)
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <NavTopic selectedTopicId={selectedTopicId} />
      <main className="w-1/2 ml-[25%] flex flex-col items-center relative">
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
                  <p
                    className="text-gray-500 font-sans text-2xl cursor-pointer"
                    onClick={() => handleAddTopic(topic.id)}
                  >
                    +
                  </p>
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
              {topicInfoId === topic.id && (
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
