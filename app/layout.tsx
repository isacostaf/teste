import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Projeto de Requisitos de Software",
  description: "Site para documentação de um projeto de requisitos de software",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-[100dvh]">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6 text-purple-600" />
                  <span className="font-bold">ReqSoft</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-purple-600 hover:underline underline-offset-4"
                  >
                    Início
                  </Link>
                  <Link
                    href="/sobre"
                    className="text-sm font-medium hover:text-purple-600 hover:underline underline-offset-4"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="/entregas"
                    className="text-sm font-medium hover:text-purple-600 hover:underline underline-offset-4"
                  >
                    Entregas
                  </Link>
                </nav>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} ReqSoft. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                    Termos
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                    Privacidade
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                    Contato
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
