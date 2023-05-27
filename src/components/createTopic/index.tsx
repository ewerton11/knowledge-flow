export default function CreateTopic() {
  return (
    <div className="w-full h-40 sticky top-0 bg-white flex flex-col justify-center items-center z-10">
      <div className="w-full h-1/2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Proximo topico para aprender"
          className="w-[90%] h-[70%]"
        />
      </div>
      <div className="w-full h-[30%] border-y border-gray-200 flex justify-end items-center">
        <button className="w-24 h-3/5 bg-blue-400 mr-[5%] rounded-2xl">
          botão
        </button>
        {/* <p>aa</p> */}
      </div>
    </div>
  )
}
