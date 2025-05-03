import Link from "next/link"
import { ChevronLeft, FileText, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Entrega2Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/entregas" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Voltar para Entregas
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <FileText className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Entrega 2: Especificação de Requisitos</h1>
            <p className="text-gray-500">Publicado em 30/07/2023</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Resumo</h2>
          <p className="text-gray-700 mb-4">
            A Especificação de Requisitos detalha os requisitos funcionais e não-funcionais do sistema, fornecendo uma
            descrição completa das funcionalidades a serem implementadas.
          </p>
          <p className="text-gray-700 mb-4">
            Nesta entrega, apresentamos os requisitos detalhados, casos de uso, regras de negócio, requisitos de
            interface e requisitos não-funcionais como desempenho, segurança e usabilidade.
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Baixar Documento Completo
          </Button>
        </div>

        <Tabs defaultValue="funcionais" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="funcionais">Requisitos Funcionais</TabsTrigger>
            <TabsTrigger value="nao-funcionais">Requisitos Não-Funcionais</TabsTrigger>
          </TabsList>
          <TabsContent value="funcionais" className="mt-6">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RF001 - Cadastro de Usuários</h3>
                    <p className="text-gray-700 mt-2">
                      O sistema deve permitir o cadastro de usuários com diferentes perfis de acesso (administrador,
                      analista, desenvolvedor, stakeholder).
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Prioridade:</span> Alta
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Complexidade:</span> Média
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RF002 - Gerenciamento de Projetos</h3>
                    <p className="text-gray-700 mt-2">
                      O sistema deve permitir a criação, edição e exclusão de projetos, associando usuários e definindo
                      suas permissões.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Prioridade:</span> Alta
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Complexidade:</span> Alta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RF003 - Elicitação de Requisitos</h3>
                    <p className="text-gray-700 mt-2">
                      O sistema deve fornecer ferramentas para elicitação de requisitos, incluindo templates para
                      entrevistas, questionários e workshops.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Prioridade:</span> Média
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Complexidade:</span> Alta
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="nao-funcionais" className="mt-6">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RNF001 - Desempenho</h3>
                    <p className="text-gray-700 mt-2">
                      O sistema deve responder a consultas em menos de 2 segundos e operações de escrita em menos de 5
                      segundos, mesmo com 100 usuários simultâneos.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Categoria:</span> Desempenho
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Criticidade:</span> Alta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RNF002 - Segurança</h3>
                    <p className="text-gray-700 mt-2">
                      O sistema deve implementar autenticação de dois fatores, criptografia de dados sensíveis e
                      registro de todas as operações realizadas pelos usuários (audit trail).
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Categoria:</span> Segurança
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Criticidade:</span> Alta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">RNF003 - Usabilidade</h3>
                    <p className="text-gray-700 mt-2">
                      A interface do sistema deve ser intuitiva, permitindo que usuários realizem tarefas básicas sem
                      treinamento específico, e deve seguir as diretrizes de acessibilidade WCAG 2.1 nível AA.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">Categoria:</span> Usabilidade
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">Criticidade:</span> Média
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
