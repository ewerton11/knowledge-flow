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

  return (
    <form
      className="w-full h-40 sticky top-0 bg-white flex flex-col justify-center items-center z-10"
      onSubmit={handleCreateTopic}
    >
      <div className="w-full h-1/2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Próximo tópico para aprender"
          className="w-[90%] h-[70%]"
          value={inputTopic}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full h-[30%] border-y border-gray-200 flex justify-end items-center">
        <button
          className="w-24 h-3/5 bg-blue-400 mr-[5%] rounded-2xl"
          type="submit"
        >
          botão
        </button>
      </div>
    </form>
  )
}
