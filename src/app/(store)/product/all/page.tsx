import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getAllProducts(): Promise<Product[]> {
  const response = await api('/products/all')
  const products = await response.json()

  return products
}

export default async function AllProductsPage() {
  const products = await getAllProducts()
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-1 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src={product.image}
            width={240}
            height={240}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-5 right-5 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex w-full h-full items-center justify-center rounded-full bg-green-600 px-2 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
