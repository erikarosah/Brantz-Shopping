import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()
  return (
    <>
      <Link href="/product/all" className="hover:underline max-w-fit text-sm">
        Ver todos os produtos
      </Link>
      <div className="grid h-screen max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
        <Link
          href={`/product/${highlightedProduct.slug}`}
          className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src={highlightedProduct.image}
            width={440}
            height={440}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{highlightedProduct.title}</span>
            <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
              {highlightedProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </Link>
        {otherProducts.map((procuct) => (
          <Link
            key={procuct.id}
            href={`/product/${procuct.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
          >
            <Image
              className="group-hover:scale-105 transition-transform duration-500"
              src={procuct.image}
              width={240}
              height={240}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-6 right-3 h-10 flex items-center gap-2 max-w-[260px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{procuct.title}</span>
              <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
                {procuct.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
