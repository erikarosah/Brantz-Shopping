import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid h-screen max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-01.png"
          width={440}
          height={440}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Goalkeeper Jersey 2023/24</span>
          <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
            R$ 370,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-02.png"
          width={240}
          height={240}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-6 right-3 h-10 flex items-center gap-2 max-w-[260px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Third Jersey 2023/24</span>
          <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
            R$ 370,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-03.png"
          width={240}
          height={240}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-6 right-3 h-10 flex items-center gap-2 max-w-[260px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Away Jersey 2023/24</span>
          <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
            R$ 370,00
          </span>
        </div>
      </Link>
    </div>
  )
}
