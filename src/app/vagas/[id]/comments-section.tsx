import { Comment } from "@/lib/types"

async function fetchComments(jobId: string) {
  try {
    const res = await fetch(
      `https://apis.codante.io/api/job-board/jobs/${jobId}/comments`,
    )

    const json = await res.json()
    return Array.isArray(json.data) ? json.data : []
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch comments")
  }
}

export default async function CommentsSection({ jobId }: { jobId: string }) {
  const comments = await fetchComments(jobId)

  return (
    <div>
      <h2 className="mt-8 text-2xl font-bold">Comentários</h2>
      <div className="mt-4">
        {comments.map((comment: Comment) => (
          <div key={comment.id} className="mb-4 rounded border p-4">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
