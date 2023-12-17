import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid grid-cols-3 max-h-[800px]">
      <div className="col-span-2 overflow-hidden flex justify-center ">
        <Image
          src="/moletom-01.png"
          alt=""
          quality={100}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3l font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          Mantenha-se aquecido e seco em todas as condições climáticas. Esta
          jaqueta corta-vento do Manchester City é perfeita para temperaturas
          amenas, e seus detalhes esportivos da marca deixam facilmente seu
          entusiasmo pelo Cityzen em plena exibição.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-green-600 px-5 py-2.5 font-semibold cursor-pointer">
            R$129,00
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$ 10,75
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
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
