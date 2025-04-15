import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-5xl py-20 text-center">
      <h2 className="font-display text-4xl font-black">
        Nada encontrado aqui...
      </h2>
      <Image
        className="mx-auto w-sm"
        src="/boat.png"
        alt="ilustração de um barco"
        width={300}
        height={300}
        priority={true}
      />
      <p className="text-3xl font-extralight text-gray-400">
        Não foi possível encontrar a página solicitada.
      </p>
      <Link
        className={cn("mt-10 block", buttonVariants({ variant: "default" }))}
        href="/"
      >
        Voltar à Home
      </Link>
    </main>
  )
}
