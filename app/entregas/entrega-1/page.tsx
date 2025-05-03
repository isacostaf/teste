import Link from "next/link"
import { ChevronLeft, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Entrega1Page() {
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
            <h1 className="text-3xl font-bold">Entrega 1: Documento de Visão</h1>
            <p className="text-gray-500">Publicado em 15/06/2023</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Resumo</h2>
          <p className="text-gray-700 mb-4">
            O Documento de Visão estabelece a visão geral do projeto, definindo o escopo e os requisitos de alto nível.
            Este documento serve como base para o desenvolvimento dos requisitos detalhados e orienta as decisões de
            design e implementação.
          </p>
          <p className="text-gray-700 mb-4">
            Nesta entrega, apresentamos a visão do produto, os principais stakeholders, as necessidades dos usuários, as
            características principais do sistema e as restrições de alto nível.
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Baixar Documento Completo
          </Button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">1. Introdução</h2>
            <p className="text-gray-700 mb-4">
              Este documento descreve os requisitos de alto nível do Sistema de Gestão de Requisitos de Software, um
              sistema destinado a facilitar o processo de engenharia de requisitos em projetos de desenvolvimento de
              software.
            </p>
            <p className="text-gray-700">
              O propósito deste documento é fornecer uma visão geral do sistema, seus objetivos, funcionalidades
              principais e restrições, servindo como base para o desenvolvimento dos requisitos detalhados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">2. Posicionamento</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-700">2.1 Oportunidade de Negócio</h3>
                <p className="text-gray-700">
                  A engenharia de requisitos é uma etapa crítica no desenvolvimento de software, e a falta de
                  ferramentas adequadas para gerenciar este processo pode levar a requisitos mal compreendidos,
                  incompletos ou inconsistentes, resultando em produtos que não atendem às necessidades dos usuários.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-700">2.2 Declaração do Problema</h3>
                <table className="w-full border-collapse border border-gray-300 mt-2">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 bg-gray-50 font-medium">O problema</td>
                      <td className="border border-gray-300 p-2">
                        Dificuldade em gerenciar requisitos de software de forma eficiente e colaborativa
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Afeta</td>
                      <td className="border border-gray-300 p-2">
                        Analistas de requisitos, gerentes de projeto, desenvolvedores e stakeholders
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Cujo impacto é</td>
                      <td className="border border-gray-300 p-2">
                        Requisitos mal compreendidos, retrabalho, atrasos no projeto e insatisfação do cliente
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Uma solução seria</td>
                      <td className="border border-gray-300 p-2">
                        Um sistema integrado para elicitação, documentação, rastreabilidade e validação de requisitos
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">3. Descrição dos Stakeholders</h2>
            <p className="text-gray-700 mb-4">
              Esta seção identifica os stakeholders do projeto e os usuários do sistema, descrevendo suas necessidades e
              expectativas.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-gray-300 p-2 text-left">Stakeholder</th>
                    <th className="border border-gray-300 p-2 text-left">Descrição</th>
                    <th className="border border-gray-300 p-2 text-left">Responsabilidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Analistas de Requisitos</td>
                    <td className="border border-gray-300 p-2">
                      Profissionais responsáveis pela elicitação e documentação de requisitos
                    </td>
                    <td className="border border-gray-300 p-2">
                      Conduzir entrevistas, documentar requisitos, criar modelos e validar com stakeholders
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Gerentes de Projeto</td>
                    <td className="border border-gray-300 p-2">Responsáveis pelo planejamento e execução do projeto</td>
                    <td className="border border-gray-300 p-2">
                      Priorizar requisitos, alocar recursos e monitorar o progresso
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Desenvolvedores</td>
                    <td className="border border-gray-300 p-2">Equipe responsável pela implementação do sistema</td>
                    <td className="border border-gray-300 p-2">Compreender requisitos e implementar funcionalidades</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
