import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import JobPostingCard from "./job-posting-card"
import { Suspense } from "react"
import CommentsSection from "./comments-section"
import JobPostingSkeleton from "./job-posting-skeleton"
import JobCommentSkeleton from "./job-comments-skeleton"

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const jobId = (await params).id

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <Suspense fallback={<JobPostingSkeleton />}>
        <JobPostingCard jobId={jobId} />
      </Suspense>

      <Suspense fallback={<JobCommentSkeleton />}>
        <CommentsSection jobId={jobId} />
      </Suspense>
    </div>
  )
}
