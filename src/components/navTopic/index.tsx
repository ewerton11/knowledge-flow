interface ISelectedTopicId {
  selectedTopicId: number | null
}

export default function NavTopic({ selectedTopicId }: ISelectedTopicId) {
  return (
    <div className="w-[5%] h-full bg-blue-400 fixed left-[20%] flex justify-center items-center">
      {selectedTopicId === null ? (
        <h1 className="[writingMode:vertical-rl] [textOrientation:upright] bg-yellow-400 font-sans text-lg">
          inicio {selectedTopicId}
        </h1>
      ) : (
        <h1 className="[writingMode:vertical-rl] [textOrientation:upright] bg-yellow-400 font-sans text-lg">
          exemplo {selectedTopicId}
        </h1>
      )}
    </div>
  )
}
