import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-screen max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
      <Skeleton className="col-span-6 row-span-6 h-[550px]" />
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="col-span-3 row-span-3" />
      ))}
    </div>
  )
}
