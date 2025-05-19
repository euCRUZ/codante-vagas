import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <article
            key={index}
            className="grid w-full grid-cols-6 items-center border border-t-4 border-black bg-white px-6 py-4 shadow"
          >
            <div className="col-span-2 overflow-hidden">
              <Skeleton height={24} width="80%" />
            </div>
            <div>
              <Skeleton height={18} width={80} />
            </div>
            <div>
              <Skeleton height={18} width={70} />
            </div>
            <div>
              <Skeleton height={18} width={90} />
            </div>
            <div>
              <Skeleton height={36} width={60} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
