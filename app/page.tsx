import Link from "next/link"
import { ArrowRight, Users, FileText, Package } from "lucide-react"
import TeamMember from "@/components/team-member"
import { Button } from "@/components/ui/button"

export default function Home() {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Gerente de Projeto",
      image: "/placeholder.svg?height=200&width=200",
      description: "Especialista em gerenciamento de projetos de software com 5 anos de experiência.",
    },
    {
      name: "Carlos Oliveira",
      role: "Analista de Requisitos",
      image: "/placeholder.svg?height=200&width=200",
      description: "Focado em elicitação e documentação de requisitos de software.",
    },
    {
      name: "Mariana Costa",
      role: "Desenvolvedora",
      image: "/placeholder.svg?height=200&width=200",
      description: "Desenvolvedora full-stack com experiência em aplicações web modernas.",
    },
    {
      name: "Rafael Santos",
      role: "UX Designer",
      image: "/placeholder.svg?height=200&width=200",
      description: "Designer de experiência do usuário com foco em interfaces intuitivas.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-pink-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Projeto de Requisitos de Software
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Documentação completa e estruturada do nosso processo de engenharia de requisitos, desde a elicitação
                  até a validação.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/sobre">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                    Sobre o Projeto <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/entregas">
                  <Button variant="outline">Ver Entregas</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Resumo do Projeto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Abordagem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Este projeto tem como objetivo documentar e implementar um processo completo de engenharia de
                  requisitos, seguindo as melhores práticas da indústria. Utilizamos uma abordagem centrada no usuário,
                  com foco em requisitos funcionais e não-funcionais claramente definidos.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-pink-100 p-4">
                    <FileText className="h-6 w-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold">Documentação</h3>
                  <p className="text-gray-500 text-center">
                    Documentação completa e estruturada de todos os requisitos do sistema.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-purple-100 p-4">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold">Colaboração</h3>
                  <p className="text-gray-500 text-center">
                    Processo colaborativo envolvendo stakeholders e equipe de desenvolvimento.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-blue-100 p-4">
                    <Package className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Entregas</h3>
                  <p className="text-gray-500 text-center">
                    Entregas incrementais com validação contínua dos requisitos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Equipe</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os profissionais responsáveis pelo desenvolvimento deste projeto.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
                {teamMembers.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    description={member.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
