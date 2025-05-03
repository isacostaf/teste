import Link from "next/link"
import { Calendar, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EntregasPage() {
  const entregas = [
    {
      id: 1,
      title: "Documento de Visão",
      description: "Visão geral do projeto, escopo e requisitos de alto nível",
      date: "15/06/2023",
      link: "/entregas/entrega-1",
    },
    {
      id: 2,
      title: "Especificação de Requisitos",
      description: "Detalhamento dos requisitos funcionais e não-funcionais",
      date: "30/07/2023",
      link: "/entregas/entrega-2",
    },
    {
      id: 3,
      title: "Protótipos e Validação",
      description: "Protótipos de interface e resultados da validação com stakeholders",
      date: "15/09/2023",
      link: "/entregas/entrega-3",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entregas do Projeto</h1>
        <p className="text-gray-500 md:text-xl max-w-[800px] mx-auto">
          Documentação e artefatos produzidos durante o processo de engenharia de requisitos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {entregas.map((entrega) => (
          <Card key={entrega.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-4">
              <CardTitle className="flex items-center text-xl text-purple-700">
                <FileText className="h-5 w-5 mr-2" />
                Entrega {entrega.id}
              </CardTitle>
              <CardDescription className="flex items-center mt-2">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                <span>{entrega.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">{entrega.title}</h3>
              <p className="text-gray-500">{entrega.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={entrega.link} className="w-full">
                <Button variant="outline" className="w-full group">
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cronograma de Entregas</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-pink-500 rounded-full w-4 h-4 mt-1.5 mr-3"></div>
            <div>
              <h3 className="font-medium">Fase 1: Elicitação de Requisitos</h3>
              <p className="text-gray-500 text-sm">Maio - Junho 2023</p>
              <p className="mt-1 text-gray-600">
                Entrevistas com stakeholders, análise de documentos e definição do escopo.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-500 rounded-full w-4 h-4 mt-1.5 mr-3"></div>
            <div>
              <h3 className="font-medium">Fase 2: Análise e Documentação</h3>
              <p className="text-gray-500 text-sm">Julho - Agosto 2023</p>
              <p className="mt-1 text-gray-600">Detalhamento dos requisitos, criação de modelos e especificações.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-3"></div>
            <div>
              <h3 className="font-medium">Fase 3: Validação e Prototipagem</h3>
              <p className="text-gray-500 text-sm">Agosto - Setembro 2023</p>
              <p className="mt-1 text-gray-600">
                Criação de protótipos, validação com usuários e refinamento dos requisitos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
