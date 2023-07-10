import { useState } from 'react'
import Image from 'next/image'
import { ITopic } from '@/app/topics/page'
import Idea from '../../../public/images/idea.png'

interface ITopicCardProps {
  topic: ITopic
  handleAddTopic: (id: number) => void
  handleUpdateTopic: (id: number, newTitle: string) => void
  handleDeleteTopic: (id: number) => void
  handleCheckingTopic: (id: number) => void
}

export default function TopicCard({
  topic,
  handleAddTopic,
  handleUpdateTopic,
  handleDeleteTopic,
  handleCheckingTopic,
}: ITopicCardProps) {
  const [isConfigVisible, setIsConfigVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(topic.title)

  const createdAtDate = new Date(topic.createdAt)
  const formattedDate = createdAtDate.toLocaleDateString()

  const toggleConfigVisibility = () => {
    setIsConfigVisible(!isConfigVisible)
  }

  const updateTopic = () => {
    handleUpdateTopic(topic.id, newTitle)
  }

  const deleteTopic = () => {
    handleDeleteTopic(topic.id)
  }

  const checkingTopic = () => {
    handleCheckingTopic(topic.id)
  }

  return (
    <div
      key={topic.id}
      className={`w-full ${
        isConfigVisible ? 'h-28' : 'h-16'
      } mt-10 bg-white relative`}
    >
      <div className="w-[95%] h-16 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
        <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
          <Image
            src={Idea}
            width={300}
            height={300}
            alt="Image of an idea"
            className="w-2/3 h-2/3"
          />
        </div>
        <div className="w-[10%] ml-[3%] flex items-center">
          <div
            className="w-4 h-4 bg-white border-2 rounded border-gray-500 text-gray-500 flex justify-center items-center cursor-pointer"
            onClick={checkingTopic}
          >
            {topic.isChecked ? '✓' : ''}
          </div>
          <div
            className="w-4 h-4  ml-3 flex items-center justify-center cursor-pointer"
            onClick={toggleConfigVisibility}
          >
            <Image
              src="/images/line-angle-down-icon.svg"
              width={300}
              height={300}
              alt="Arrow to show more options"
              className={`w-full ${
                isConfigVisible ? 'rotate-180' : ''
              } transition`}
            />
          </div>
        </div>
        {isEditing ? (
          <div className="w-[67%] flex items-center text-blue-600 font-sans cursor-pointer">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
        ) : (
          <div className="w-[67%] flex items-center text-blue-600 font-sans cursor-pointer">
            <p>{topic.title}</p>
          </div>
        )}
        <div className="w-1/5 flex items-center text-gray-500 font-sans">
          <p>{formattedDate}</p>
        </div>
      </div>
      {isConfigVisible && (
        <div className="w-[95%] h-12 bg-white border-x border-b border-gray-300 shadow-sm rounded-b-2xl absolute top-[40%] flex items-end">
          <div className="w-full h-3/5 flex items-center">
            <div
              className="w-4 h-4 ml-[3%] flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              onClick={() => handleAddTopic(topic.id)}
            >
              <Image
                src="/images/plus-icon.svg"
                width={300}
                height={300}
                alt="add sub topic"
                className="w-[90%] h-[90%]"
              />
            </div>
            <div
              className="w-4 h-4  ml-5 flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              onClick={() => {
                setIsEditing(!isEditing)
                updateTopic()
              }}
            >
              <Image
                src="/images/pencil-icon.svg"
                width={300}
                height={300}
                alt="edit topic"
                className="w-[90%] h-[90%]"
              />
            </div>
            <div
              className="w-4 h-4 ml-5 flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              onClick={deleteTopic}
            >
              <Image
                src="/images/recycle-bin-icon.svg"
                width={300}
                height={300}
                alt="delete topic"
                className="w-[90%] h-[90%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
