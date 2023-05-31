import { useState } from 'react'
import Image from 'next/image'
import { ITopic } from '@/app/topics/page'
// import Idea from '../../../public/images/idea.png'
// import Arrow from '../../../public/images/line-angle-down-icon.svg'
// import Edit from '../../../public/images/edit-icon.png'
// import Bin from '../../../public/images/bin.png'

interface ITopicCardProps {
  topic: ITopic
  handleAddTopic: (id: number) => void
}

export default function TopicCard({ topic, handleAddTopic }: ITopicCardProps) {
  const [isConfigVisible, setIsConfigVisible] = useState(false)

  const createdAtDate = new Date(topic.createdAt)
  const formattedDate = createdAtDate.toLocaleDateString()

  const toggleConfigVisibility = () => {
    setIsConfigVisible(!isConfigVisible)
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
          {/* <Image
            src={Idea}
            width={300}
            height={300}
            alt="Image of an idea"
            className="w-2/3 h-2/3"
          /> */}
        </div>
        <div className="w-[13%] flex items-center justify-center">
          <div
            className="w-1/2 flex items-center justify-center cursor-pointer"
            onClick={toggleConfigVisibility}
          >
            {/* <Image
              src={Arrow}
              width={300}
              height={300}
              alt="Arrow to show more options"
              className="w-1/2 rotate-90"
            /> */}
          </div>
          <div className="w-4 h-4 bg-white border-2 rounded border-gray-500 flex justify-center items-center cursor-pointer">
            {topic.isChecked ? '✓' : '✓'}
          </div>
        </div>
        <div
          className="w-[67%] flex items-center text-blue-600 font-sans cursor-pointer"
          // onClick={() => handleTopicClick(topic.id)}
        >
          <p>{topic.title}</p>
        </div>
        <div className="w-1/5 flex items-center text-gray-500 font-sans">
          <p>{formattedDate}</p>
        </div>
      </div>
      {isConfigVisible && (
        <div className="w-[95%] h-12 bg-white border-x border-b border-gray-300 shadow-sm rounded-b-2xl absolute top-[40%] flex items-end">
          <div className="w-full h-3/5 flex items-center">
            <div
              className="w-10 flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              onClick={() => handleAddTopic(topic.id)}
            >
              +
            </div>
            <div
              className="w-10 flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              // onClick={() => handleAddTopic(topic.id)}
            >
              {/* <Image
                src={Edit}
                width={300}
                height={300}
                alt="Arrow to show more options"
                className="w-1/2"
              /> */}
            </div>
            <div
              className="w-10 flex justify-center items-center text-gray-500 font-sans text-2xl cursor-pointer"
              // onClick={() => handleAddTopic(topic.id)}
            >
              {/* <Image
                src={Bin}
                width={300}
                height={300}
                alt="Arrow to show more options"
                className="w-1/2"
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
