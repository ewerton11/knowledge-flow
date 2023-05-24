import { ITopic } from '@/app/page'
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
          const response = await api.get(`/topics/${selectedTopicId}`)
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
    <div className="w-[5%] h-full border-l fixed left-[20%] flex justify-center items-center">
      {data === null ? (
        <h1 className="[writingMode:vertical-rl] [textOrientation:upright] font-sans text-lg">
          inicio
        </h1>
      ) : (
        <h1 className="[writingMode:vertical-rl] [textOrientation:upright] font-sans text-lg">
          {data.title}
        </h1>
      )}
    </div>
  )
}
