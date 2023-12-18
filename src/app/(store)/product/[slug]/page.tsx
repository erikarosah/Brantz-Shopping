import { AddToCartButton } from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  params: {
    slug: string
  }
}
async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const product = await response.json()
  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: product.title,
  }
}
export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <>
      <Link href={'/product/all'} className="hover:underline text-sm max-w-fit">
        Ver todos os produtos
      </Link>

      <div className="relative grid grid-cols-3 max-h-[800px]">
        <div className="col-span-2 overflow-hidden flex justify-center max-h-[500px]">
          <Image
            src={product.image}
            alt=""
            quality={100}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center px-12">
          <h1 className="text-3l font-bold leading-tight">{product.title}</h1>
          <p className="mt-2 leading-relaxed text-zinc-400">
            {product.description}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-block rounded-full bg-green-600 px-5 py-2.5 font-semibold cursor-pointer">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <span className="text-sm text-zinc-400">
              Em até 10x s/ juros de{' '}
              {(product.price / 10).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="mt-8 space-y-4">
            <span className="block font-semibold">Tamanhos</span>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                P
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                M
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                G
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                GG
              </button>
            </div>
          </div>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </>
  )
}
