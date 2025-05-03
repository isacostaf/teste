"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function SobrePage() {
  const [activeTab, setActiveTab] = useState("sobre-1")

  const sections = [
    {
      id: "sobre-1",
      title: "Visão Geral",
      content:
        "Este projeto tem como objetivo documentar e implementar um processo completo de engenharia de requisitos para um sistema de software. A engenharia de requisitos é uma etapa crucial no desenvolvimento de software, pois estabelece as bases para todo o processo de desenvolvimento subsequente. Neste projeto, seguimos uma abordagem sistemática para identificar, analisar, documentar e validar os requisitos do sistema, garantindo que o produto final atenda às necessidades dos stakeholders.",
    },
    {
      id: "sobre-2",
      title: "Metodologia",
      content:
        "Nossa metodologia de engenharia de requisitos segue um processo iterativo e incremental, com foco na colaboração contínua com os stakeholders. Utilizamos técnicas como entrevistas, workshops, prototipagem e análise de documentos para elicitar requisitos. A documentação é mantida em formatos acessíveis e rastreáveis, permitindo o acompanhamento da evolução dos requisitos ao longo do projeto. Adotamos práticas ágeis para permitir a adaptação a mudanças e a entrega contínua de valor.",
    },
    {
      id: "sobre-3",
      title: "Objetivos",
      content:
        "Os principais objetivos deste projeto de requisitos são: 1) Identificar e documentar de forma clara e precisa todos os requisitos funcionais e não-funcionais do sistema; 2) Estabelecer prioridades e dependências entre requisitos; 3) Criar uma base sólida para o planejamento e execução das atividades de desenvolvimento; 4) Facilitar a comunicação entre stakeholders e equipe de desenvolvimento; 5) Minimizar riscos relacionados a requisitos mal compreendidos ou incompletos; 6) Fornecer critérios objetivos para validação e verificação do sistema.",
    },
    {
      id: "sobre-4",
      title: "Ferramentas",
      content:
        "Para a execução deste projeto, utilizamos um conjunto de ferramentas modernas que facilitam a documentação, colaboração e rastreabilidade dos requisitos. Entre as principais ferramentas estão: sistemas de controle de versão para gerenciar mudanças na documentação, ferramentas de modelagem para criar diagramas UML e outros artefatos visuais, plataformas de colaboração para facilitar a comunicação entre membros da equipe e stakeholders, e ferramentas de gestão de projetos para acompanhar o progresso das atividades relacionadas aos requisitos.",
    },
    {
      id: "sobre-5",
      title: "Stakeholders",
      content:
        "Os stakeholders deste projeto incluem representantes de diversas áreas que têm interesse direto ou indireto no sistema a ser desenvolvido. Entre eles estão: usuários finais que utilizarão o sistema em suas atividades diárias, gerentes de departamentos cujas equipes serão impactadas pelo sistema, especialistas de domínio que fornecem conhecimento específico sobre os processos de negócio, equipe de TI responsável pela manutenção e suporte do sistema, e patrocinadores que financiam o projeto e têm expectativas quanto ao retorno sobre o investimento.",
    },
    {
      id: "sobre-6",
      title: "Cronograma",
      content:
        "O projeto de engenharia de requisitos segue um cronograma estruturado em fases, com marcos claros e entregas definidas. A fase inicial de elicitação de requisitos tem duração de 4 semanas, seguida pela fase de análise e documentação com duração de 6 semanas. A validação dos requisitos ocorre de forma contínua, com ciclos de feedback a cada 2 semanas. O projeto prevê 3 entregas principais, cada uma representando um conjunto completo e validado de requisitos para diferentes módulos do sistema.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Projeto</h1>
        <p className="text-gray-500 md:text-xl max-w-[800px] mx-auto">
          Conheça os detalhes do nosso projeto de requisitos de software, metodologia, objetivos e mais.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <Tabs defaultValue="sobre-1" className="w-full max-w-4xl" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="text-sm md:text-base">
                {section.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="border rounded-lg p-6 mt-6 shadow-sm">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold mb-4 text-purple-700">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="w-full max-w-4xl mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-pink-700">Navegação Rápida</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`p-4 rounded-lg text-left transition-all ${
                  activeTab === section.id ? "bg-purple-100 border-l-4 border-purple-500" : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-medium block">{section.title}</span>
                <span className="text-sm text-gray-500">Seção {section.id.split("-")[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
