import { Skeleton } from '@/components/skeleton'

export default function AllProductsLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-[240px]" />
        ))}
      </div>
    </div>
  )
}
