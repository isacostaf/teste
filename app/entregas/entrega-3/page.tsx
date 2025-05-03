import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, FileText, Download, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Entrega3Page() {
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
            <h1 className="text-3xl font-bold">Entrega 3: Protótipos e Validação</h1>
            <p className="text-gray-500">Publicado em 15/09/2023</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Resumo</h2>
          <p className="text-gray-700 mb-4">
            Esta entrega apresenta os protótipos de interface desenvolvidos com base nos requisitos especificados, bem
            como os resultados da validação realizada com os stakeholders.
          </p>
          <p className="text-gray-700 mb-4">
            Os protótipos foram desenvolvidos utilizando ferramentas de design de interface e foram validados através de
            sessões de teste com usuários representativos de cada perfil.
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Baixar Documento Completo
          </Button>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">1. Protótipos de Interface</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">1.1 Tela de Dashboard</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="Protótipo da tela de Dashboard"
                    className="rounded-lg border shadow-sm mx-auto"
                  />
                  <p className="text-gray-500 text-center mt-2 text-sm">Figura 1: Protótipo da tela de Dashboard</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Descrição:</h4>
                  <p className="text-gray-700">
                    A tela de Dashboard apresenta uma visão geral do projeto, exibindo métricas importantes como número
                    total de requisitos, requisitos por status, atividades recentes e próximos marcos.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">1.2 Tela de Gerenciamento de Requisitos</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="Protótipo da tela de Gerenciamento de Requisitos"
                    className="rounded-lg border shadow-sm mx-auto"
                  />
                  <p className="text-gray-500 text-center mt-2 text-sm">
                    Figura 2: Protótipo da tela de Gerenciamento de Requisitos
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Descrição:</h4>
                  <p className="text-gray-700">
                    A tela de Gerenciamento de Requisitos permite visualizar, filtrar, adicionar, editar e excluir
                    requisitos. Os requisitos são organizados em uma tabela com colunas para ID, título, descrição,
                    prioridade, status e responsável.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">2. Resultados da Validação</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">2.1 Métricas de Usabilidade</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Taxa de Sucesso</span>
                      <span className="text-green-600 font-bold">92%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Percentual de tarefas concluídas com sucesso pelos usuários durante os testes.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Tempo Médio</span>
                      <span className="text-blue-600 font-bold">2.5 min</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Tempo médio para conclusão das tarefas principais durante os testes.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Satisfação</span>
                      <span className="text-purple-600 font-bold">4.7/5</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Avaliação média de satisfação dos usuários após a utilização dos protótipos.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Os resultados dos testes de usabilidade indicam uma boa aceitação dos protótipos pelos usuários, com
                  altas taxas de sucesso na conclusão das tarefas e avaliações positivas de satisfação.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">2.2 Feedback dos Stakeholders</h3>

                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <ThumbsUp className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Pontos Positivos</h4>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Interface intuitiva e fácil de navegar</li>
                        <li>Organização clara dos requisitos por categorias</li>
                        <li>Funcionalidades de filtro e busca eficientes</li>
                        <li>Dashboard informativo com métricas relevantes</li>
                        <li>Processo de cadastro de novos requisitos simplificado</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <ThumbsDown className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Pontos de Melhoria</h4>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Adicionar mais opções de visualização (Kanban, lista, etc.)</li>
                        <li>Melhorar o contraste em alguns elementos da interface</li>
                        <li>Incluir mais atalhos de teclado para operações frequentes</li>
                        <li>Simplificar o processo de vinculação entre requisitos relacionados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">3. Próximos Passos</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Com base nos resultados da validação e no feedback dos stakeholders, os próximos passos incluem:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Refinamento dos protótipos incorporando as sugestões de melhoria</li>
                <li>Desenvolvimento de protótipos de alta fidelidade para as telas principais</li>
                <li>Realização de uma nova rodada de testes com foco nas funcionalidades mais complexas</li>
                <li>Finalização da especificação técnica para início da fase de implementação</li>
                <li>Definição do cronograma detalhado para o desenvolvimento do sistema</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
