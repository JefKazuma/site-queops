import React from 'react'

import ImageCaseIndustrial1 from '../../img/cases/industrial/1.png';
import ImageCaseIndustrial2 from '../../img/cases/industrial/2.png';
import ImageCaseIndustrial3 from '../../img/cases/industrial/3.png';
import ImageCaseIndustrial4 from '../../img/cases/industrial/4.png';
import ImageCaseIndustrial5 from '../../img/cases/industrial/5.jpg';
import ImageCaseIndustrial6 from '../../img/cases/industrial/6.png';

import ImageCaseResidencial1 from "../../img/cases/residencial/1.jpg";
import ImageCaseResidencial2 from "../../img/cases/residencial/2.jpg";

const CATEGORY = {
  INDUSTRIAL: 1,
  RESIDENCIAL: 2,
}
const CLIENT = {
  TABACARIA: 1,
  ADRIANA_PELEGRINI: 2,
}
const ITEM = {
  INDUSTRIAL_TABACARIA: 1,
  RESIDENCIAL_PELEGRINI: 2,
}

const categories = {
  [CATEGORY.INDUSTRIAL]: {
    id: CATEGORY.INDUSTRIAL,
    title: 'Industrial',
    backgroundImage: ImageCaseIndustrial1,
  },
  [CATEGORY.RESIDENCIAL]: {
    id: CATEGORY.RESIDENCIAL,
    title: 'Residencial',
    backgroundImage: ImageCaseResidencial1,
  },
}

const clients = {
  [CLIENT.TABACARIA]: {
    id: CLIENT.TABACARIA,
    name: 'Tabacaria Guanabara',
  },
  [CLIENT.ADRIANA_PELEGRINI]: {
    id: CLIENT.ADRIANA_PELEGRINI,
    name: 'Adriana Pelegrini'
  },
}

const itemsByCategory = {
  [CATEGORY.INDUSTRIAL]: [
    {
      id: ITEM.INDUSTRIAL_TABACARIA,
      categoryId: CATEGORY.INDUSTRIAL,
      clientId: CLIENT.TABACARIA,
      textJsx: (
        <div>
          <h3>Contato</h3>
          <p>A Quéops Engenharia iniciou sua relação com a Tabacaria Guanabara (Londrina/PR) dada necessidade do cliente em melhorar o seu processo produtivo e ampliar sua produção. Almejava-se viabilização de nova sede para sua Indústria, com um novo layout da produção e setor administrativo. Foi realizado orçamento para elaboração de layout da indústria e projeto arquitetônico compatibilizado com os projetos complementares.</p>
          <h3>Diferencial</h3>
          <p>Com uso do software Revit, foi fornecida maquete 3D do empreendimento e orçamento com lista de materiais e serviços necessários para execução do projeto. A indústria passara a ter maior poder de negociação com os futuros fornecedores, uma vez que o escopo da obra fora previamente definido. A diferença entre orçamentos realizados por outras empresas diferiam cerca de 2 milhões de reais (30% do valor total do projeto).</p>
          <h3>Processo</h3>
          <p>Todas as maquinas existentes no barracão anterior foram modeladas em 3D, utilizando os programas CREO 3.0 e SolidWorks. Paralelamente, as necessidades dos funcionários foram estudadas através de entrevistas, visando otimização de seus deslocamentos, comunicação e ergonomia. Todo o equipamento existente foi aproveitado, com adição de esteiras e automação de alguns processos.</p>
          <p>O projeto arquitetônico seguiu o layout industrial definido, objetivando obra limpa, sustentável, rápida e barata. Foi adotado sistema de reaproveitamento de águas pluviais, com sua reutilização nos banheiros, vestiários e limpeza do piso industrial.</p>
        </div>
      ),
      images: [
        ImageCaseIndustrial1,
        ImageCaseIndustrial2,
        ImageCaseIndustrial3,
        ImageCaseIndustrial4,
        ImageCaseIndustrial5,
        ImageCaseIndustrial6
      ]
    }
  ],
  [CATEGORY.RESIDENCIAL]: [
    {
      id: ITEM.RESIDENCIAL_PELEGRINI,
      categoryId: CATEGORY.RESIDENCIAL,
      clientId: CLIENT.ADRIANA_PELEGRINI,
      textJsx: (
        <div>
          <p>Com o sonho de construir sua casa própria em condomínio fechado, a cliente Adriana Pelegrini, de Presidente Prudente/SP, encontrava dificuldade diante dos valores abusivos cobrados por construtores da cidade, chegando a R$ 3.000,00/m².</p>
          <p>Ao contatar a Quéops Engenharia, foi realizado estudo de necessidades e limitação financeira da cliente para viabilização do empreendimento. Com auxílio do software Revit, desenvolveu-se projeto em 3D de sobrado com 230 m² que visava otimização dos espaços, simplicidade e estética. Foram utilizados métodos construtivos alternativos, com fechamento em bloco de concreto, pisos em concreto polido e cimento queimado, revestimento interno em gesso e externo em textura e lajes protendidas pré-moldadas.</p>
          <p>Todas as soluções foram aprovadas pela cliente Adriana, que se disse satisfeita com a redução de custos em aproximadamente 50%, conseguindo realizar o sonho da casa própria com preço justo e atendendo suas necessidades de moradia.</p>
        </div>
      ),
      images: [ImageCaseResidencial1, ImageCaseResidencial2]
    },
  ],
}


export {
  CATEGORY,
  CLIENT,
  ITEM,
  categories,
  clients,
  itemsByCategory,
}
