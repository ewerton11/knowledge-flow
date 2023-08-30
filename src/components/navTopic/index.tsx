import { ITopic } from '@/app/topics/page'
import api from '@/lib/axios'
import { useEffect, useState } from 'react'

interface ISelectedTopicId {
  selectedTopicId: number | null
}

export default function NavTopic({ selectedTopicId }: ISelectedTopicId) {
  const [data, setData] = useState<ITopic | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTopicId !== null) {
          const response = await api.get(`/Topic/${selectedTopicId}`)
          const responseData = response.data
          setData(responseData)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [selectedTopicId])

  return (
    <div className="w-[3%] h-full fixed left-[20%] flex justify-center items-center">
      {data === null ? (
        <h1 className="w-full whitespace-nowrap flex justify-center items-center rotate-90 font-sans text-lg">
          inicio
        </h1>
      ) : (
        <h1 className="w-full whitespace-nowrap flex justify-center items-center rotate-90 font-sans text-lg">
          {/* [writingMode:vertical-rl] [textOrientation:upright] */}
          {data.title}
        </h1>
      )}
    </div>
  )
}
