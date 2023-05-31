import { ChangeEvent, FormEvent, useState } from 'react'
import api from '@/lib/axios'

interface ICreateTopicProps {
  refreshTopics: () => void
  isChildTopic?: boolean
  parentId?: number
}

export default function CreateTopic({
  refreshTopics,
  isChildTopic = false,
  parentId,
}: ICreateTopicProps) {
  const [inputTopic, setInputTopic] = useState('')

  const handleCreateTopic = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const url = isChildTopic
        ? '/topics/create/child-topic'
        : '/topics/create/topic'
      const data = isChildTopic
        ? { title: inputTopic, parentId: parentId }
        : { title: inputTopic }

      await api.post(url, data)

      console.log(url, 'url', data, 'data', isChildTopic, 'isChildenTopic')

      setInputTopic('')
      refreshTopics()
    } catch (error) {
      console.error('Error creating topic:', error)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTopic(event.target.value)
  }

  //Componete ok
  return (
    <form
      className="w-full h-32 sticky top-0 bg-white flex flex-col justify-center items-center z-10"
      onSubmit={handleCreateTopic}
    >
      <div className="w-full h-[70%] flex justify-center items-center">
        <input
          className="w-[90%] h-[70%] text-lg"
          type="text"
          placeholder="Tópico para aprender"
          value={inputTopic}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full h-[30%] border-y border-gray-200 flex justify-end items-center">
        <button
          className="w-24 h-4/5 bg-blue-700 hover:bg-blue-600 transition mr-[5%] rounded-2xl text-white font-medium"
          type="submit"
        >
          Criar
        </button>
      </div>
    </form>
  )
}
