'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-1/5 h-screen border-r border-gray-200 border-solid bg-white fixed flex flex-col justify-between">
      <div className="w-full h-20 flex items-center">
        <h1 className="text-black font-mono">ewt</h1>
      </div>
      <div className="w-full flex-1 bg-white flex flex-col">
        <Link
          href="/topics"
          className={'h-14 flex justify-between items-center cursor-pointer'}
        >
          <div className="w-10 h-10 ml-5 flex justify-center items-center">
            <Image
              src="/images/books-icon.svg"
              width={300}
              height={300}
              alt="books icon"
              className="w-1/2 h-1/2 text-yellow-500"
            />
          </div>
          <div className="flex-1 flex items-center">
            <p
              className={`flex-1 ${
                pathname === '/topics' ? 'text-black' : 'text-zinc-600'
              } font-sans`}
            >
              Topicos
            </p>
          </div>
        </Link>
        <Link
          href="/profile"
          className={'h-14 flex justify-between items-center cursor-pointer'}
        >
          <div className="w-10 h-10 ml-5 flex justify-center items-center">
            <Image
              src="/images/male-icon.svg"
              width={300}
              height={300}
              alt="male icon"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="flex-1 flex items-center">
            <p
              className={`flex-1 ${
                pathname === '/profile' ? 'text-black' : 'text-zinc-600'
              } font-sans`}
            >
              Perfil
            </p>
          </div>
        </Link>
        <Link
          href="/studying"
          className="h-14 flex items-center cursor-pointer"
        >
          <div className="w-10 h-10 ml-5 flex justify-center items-center">
            <Image
              src="/images/open-book-icon.svg"
              width={300}
              height={300}
              alt="open book icon"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="flex-1 flex items-center">
            <p
              className={`flex-1 ${
                pathname === '/studying' ? 'text-black' : 'text-zinc-600'
              } font-sans`}
            >
              Estudo
            </p>
          </div>
        </Link>
        <Link href="/toStudy" className="h-14 flex items-center cursor-pointer">
          <div className="w-10 h-10 ml-5 flex justify-center items-center">
            <Image
              src="/images/creative-thinking-icon.svg"
              width={300}
              height={300}
              alt="creative thinking icon"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="flex-1 flex items-center">
            <p
              className={`flex-1 ${
                pathname === '/toStudy' ? 'text-black' : 'text-zinc-600'
              } font-sans`}
            >
              Estudar
            </p>
          </div>
        </Link>
        <Link
          href="/settings"
          className="h-14 flex items-center cursor-pointer"
        >
          <div className="w-10 h-10 ml-5 flex justify-center items-center">
            <Image
              src="/images/setting-icon.svg"
              width={300}
              height={300}
              alt="setting icon"
              className="w-1/2 h-1/2"
            />
          </div>
          <div className="flex-1 flex items-center">
            <p
              className={`flex-1 ${
                pathname === '/settings' ? 'text-black' : 'text-zinc-600'
              } font-sans`}
            >
              configuraçoes
            </p>
          </div>
        </Link>
      </div>
      <Link
        href="/newproject"
        className="h-20 bg-white flex justify-center items-center"
      >
        <button className="w-9/12 h-1/2 bg-blue-700 hover:bg-blue-600 transition rounded-3xl flex justify-center items-center relative font-medium">
          <div className="w-1/5 absolute left-0">
            <p className="text-white text-1xl">+</p>
          </div>
          <p className="text-white font-sans">Novo projeto</p>
        </button>
      </Link>
    </nav>
  )
}
