import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function JobPostingSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <Skeleton height={32} width={220} className="mb-2" />
            <Skeleton height={20} width={180} />
          </div>
          <Skeleton height={36} width={110} />
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <Skeleton circle height={20} width={20} />
            <Skeleton height={18} width={80} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton circle height={20} width={20} />
            <Skeleton height={18} width={100} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton circle height={20} width={20} />
            <Skeleton height={18} width={60} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton circle height={20} width={20} />
            <Skeleton height={18} width={40} />
          </div>
        </div>
        <Skeleton height={2} width="100%" /> {/* Separator */}
        <section>
          <Skeleton height={24} width={180} className="mb-4" />{" "}
          {/* Título seção */}
          <Skeleton count={3} height={14} className="mb-2" /> {/* Descrição */}
        </section>
        <Skeleton height={2} width="100%" /> {/* Separator */}
        <section>
          <Skeleton height={24} width={140} className="mb-4" />{" "}
          {/* Título seção */}
          <Skeleton count={2} height={14} className="mb-2" /> {/* Requisitos */}
        </section>
      </CardContent>
    </Card>
  )
}
