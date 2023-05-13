'use client'

import Navbar from '@/components/navbar'
import Image from 'next/image'
import Idea from '../../public/images/idea.png'
import { useState } from 'react'

export default function Home() {
  const [selectedDiv, setSelectedDiv] = useState(false)

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="w-1/2 ml-[20%] flex flex-col items-center">
        <div className="w-full h-20">
          <h1>Ola Ewerton</h1>
        </div>
        <div
          className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
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
            <p className="text-gray-500 font-sans text-2xl">+</p>
          </div>
          <div
            className="w-[67%] flex items-center text-blue-600 font-sans cursor-pointer"
            onClick={() => setSelectedDiv(!selectedDiv)}
          >
            <p>Programação</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        {selectedDiv === true && (
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
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Matematica</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Montar PC</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Falar Ingles</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Machine learning</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
        <div className="w-4/5 h-16 mt-10 bg-white relative rounded-2xl border border-gray-300 shadow-sm flex justify-between">
          <div className="w-10 h-10 flex justify-center items-center absolute left-3 -translate-y-1/2">
            <Image
              src={Idea}
              width={300}
              height={300}
              alt="Image of an idea"
              className="w-2/3 h-2/3"
            />
          </div>
          <div className="w-4/5 flex items-center text-blue-600 font-sans">
            <p className="absolute left-16">Estatisticas</p>
          </div>
          <div className="w-1/5 flex items-center text-gray-500 font-sans">
            <p>12/05/2023</p>
          </div>
        </div>
      </main>
      <div>
        <h1>Categorias de estudos, tipo tecnologia, ingles etc...</h1>
      </div>
    </div>
  )
}
