import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
  const maintenaceMode =
    process.env.NEXT_PUBLIC_MAINTENACE_MODE === "true" ? true : false

  if (maintenaceMode && request.nextUrl.pathname !== "/manutencao") {
    const redirectUrl = new URL("/manutencao", request.url)
    return NextResponse.redirect(redirectUrl, 302)
  }

  return NextResponse.next()
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
}
