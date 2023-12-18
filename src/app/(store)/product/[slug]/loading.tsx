import { Skeleton } from '@/components/skeleton'

export default function ProductLoading() {
  return (
    <div className="grid h-screen max-h-[860px] grid-cols-3 gap-4">
      <Skeleton className="col-span-2 h-[550px]" />
    </div>
  )
}
