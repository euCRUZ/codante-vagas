import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function JobCommentSkeleton() {
  return (
    <div>
      <h2 className="mt-8 text-2xl font-bold">Comentários</h2>
      <div className="mt-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="mb-4 rounded border p-4">
            <Skeleton height={18} width={120} className="mb-2" />
            <Skeleton count={2} height={14} width="80%" /> 
          </div>
        ))}
      </div>
    </div>
  )
}
