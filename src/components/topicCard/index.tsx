import Image from 'next/image'
import Idea from '../../../public/images/idea.png'
import { ITopic } from '@/app/topics/page'

interface ITopicCardProps {
  topic: ITopic
  handleAddTopic: (id: number) => void
}

export default function TopicCard({ topic, handleAddTopic }: ITopicCardProps) {
  return (
    <div
      key={topic.id}
      className="w-[90%] h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between"
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
        // onClick={() => handleTopicClick(topic.id)}
      >
        <p>{topic.title}</p>
      </div>
      <div className="w-1/5 flex items-center text-gray-500 font-sans">
        <p>12/05/2023</p>
      </div>
    </div>
  )
}
