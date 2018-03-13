import React from 'react'

import IMAGE_CASE_INDUSTRIAL_1 from '../../img/cases/industrial/1.png'
import IMAGE_CASE_INDUSTRIAL_2 from '../../img/cases/industrial/2.png'
import IMAGE_CASE_INDUSTRIAL_3 from '../../img/cases/industrial/3.png'
import IMAGE_CASE_INDUSTRIAL_4 from '../../img/cases/industrial/4.png'
import IMAGE_CASE_INDUSTRIAL_5 from '../../img/cases/industrial/5.jpg'
import IMAGE_CASE_INDUSTRIAL_6 from '../../img/cases/industrial/6.png'

import IMAGE_CASE_RESIDENCIAL_1 from '../../img/cases/residencial/1.jpg'
import IMAGE_CASE_RESIDENCIAL_2 from '../../img/cases/residencial/2.jpg'

import IMAGE_REPORT_THUMBNAIL from '../../img/cases/laudos/laudos_thumbnail.png'

import IMAGE_COMERCIAL_THUMBNAIL from '../../img/cases/comercial/shop.jpg'

const CATEGORY = {
  INDUSTRIAL: 1,
  RESIDENCIAL: 2,
  REPORT: 3,
  COMERCIAL: 4,
}
const CLIENT = {
  TABACARIA: 1,
  PANAMEX: 2,
  PACKPLUS: 3,
  ADRIANA_PELEGRINI: 4,
  CONDOMINIO_UPPER: 5,
  BIOLIMP: 6,
  AUTO_CENTER_BANDEIRANTES: 7,
}
const ITEM = {
  INDUSTRIAL_TABACARIA: 1,
  INDUSTRIAL_PANAMEX: 2,
  INDUSTRIAL_PACKPLUS: 3,
  RESIDENCIAL_PELEGRINI: 4,
  REPORT_CONDOMINIO_UPPER: 5,
  REPORT_BIOLIMP: 6,
  COMERCIAL_AUTO_CENTER_BANDEIRANTES: 7,
}

const categories = {
  [CATEGORY.INDUSTRIAL]: {
    id: CATEGORY.INDUSTRIAL,
    title: 'Industrial',
    backgroundImage: IMAGE_CASE_INDUSTRIAL_1,
  },
  [CATEGORY.RESIDENCIAL]: {
    id: CATEGORY.RESIDENCIAL,
    title: 'Residencial',
    backgroundImage: IMAGE_CASE_RESIDENCIAL_1,
  },
  [CATEGORY.REPORT]: {
    id: CATEGORY.REPORT,
    title: 'Laudos',
    backgroundImage: IMAGE_REPORT_THUMBNAIL,
  },
  [CATEGORY.COMERCIAL]: {
    id: CATEGORY.COMERCIAL,
    title: 'Comercial',
    backgroundImage: IMAGE_COMERCIAL_THUMBNAIL,
  },
}

const clients = {
  [CLIENT.TABACARIA]: {
    id: CLIENT.TABACARIA,
    name: 'Tabacaria Guanabara',
  },
  [CLIENT.PANAMEX]: {
    id: CLIENT.PANAMEX,
    name: 'Panamex',
  },
  [CLIENT.PACKPLUS]: {
    id: CLIENT.PACKPLUS,
    name: 'Pack Plus',
  },
  [CLIENT.ADRIANA_PELEGRINI]: {
    id: CLIENT.ADRIANA_PELEGRINI,
    name: 'Adriana Pelegrini',
  },
  [CLIENT.CONDOMINIO_UPPER]: {
    id: CLIENT.CONDOMINIO_UPPER,
    name: 'Condomínio UPPER - Jardim Botânico',
  },
  [CLIENT.BIOLIMP]: {
    id: CLIENT.BIOLIMP,
    name: 'Biolimp',
  },
  [CLIENT.AUTO_CENTER_BANDEIRANTES]: {
    id: CLIENT.AUTO_CENTER_BANDEIRANTES,
    name: 'Auto Center Bandeirantes',
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
          <p>A relação com a Tabacaria Guanabara (Londrina/PR) nasceu da necessidade em viabilizar uma nova sede baseada em um layout industrial enxuto somado à ampliação de seus processos produtivos. O desejo era de se conseguir levantar um setor administrativo junto ao galpão industrial, unindo simplicidade, design, produtividade e baixo custo de implantação.</p>
          <h3>Diferencial</h3>
          <p>Com uso de software em tecnologia BIM (Building Information Modeling), elaboramos maquete 3D do empreendimento, levantamento quantitativo de materiais e serviços, assim como o orçamento executivo de execução. O cliente neste momento, passou a ter um maior poder de negociação com futuros fornecedores, uma vez que o escopo da obra fora previamente projetado e definido. A diferença entre orçamentos de execução apresentados por empresas terceiras chegou a incríveis 30%.</p>
          <h3>Processo</h3>
          <p>Todas as máquinas existentes no barracão anterior foram modeladas em escala real em 3D, utilizando os programas CREO 3.0 e SolidWorks. Paralelamente, as necessidades dos funcionários foram estudadas através de entrevistas, visando otimização de seus deslocamentos, processos internos, comunicação e ergonomia. Todo o equipamento existente foi aproveitado, com adição de esteiras e automações de processos.</p>
          <p>O projeto arquitetônico seguiu o layout industrial definido e sua área, devido ao planejamento enxuto dos processos, foi reduzida, gerando economia ao cliente. Outro fator econômico projetado foi o de sistemas de reaproveitamento de águas pluviais, reutilizando-a em banheiros, vestiários e em limpeza do piso industrial.</p>
        </div>
      ),
      images: [
        IMAGE_CASE_INDUSTRIAL_1,
        IMAGE_CASE_INDUSTRIAL_2,
        IMAGE_CASE_INDUSTRIAL_3,
        IMAGE_CASE_INDUSTRIAL_4,
        IMAGE_CASE_INDUSTRIAL_5,
        IMAGE_CASE_INDUSTRIAL_6
      ]
    },
    {
      id: ITEM.INDUSTRIAL_PANAMEX,
      categoryId: CATEGORY.INDUSTRIAL,
      clientId: CLIENT.PANAMEX,
      textJsx: (
        <div>
          <h3>Contato</h3>
          <p>A Panamex é uma indústria cervejeira localizada em Ibiporã/PR e necessitava regularizar-se junto ao Ministério da Agricultura, Pecuária e Abastecimento (MAPA). Fora requisitado à nós a elaboração de projeto arquitetônico de adequação da reforma que estava sendo executada no galpão da fábrica. Ademais, a empresa carecia dos seguintes projetos complementares:</p>
          <ul>
            <li>Projeto Hidráulico (Para uso da edificação e da produção de cerveja);</li>
            <li>Projeto Sanitário (Para uso da edificação e do descarte da produção);</li>
            <li>Projeto de Drenagem Pluvial.</li>
          </ul>
          <p>Os projetos hidráulico e sanitário merecem destaque uma vez que o fornecimento de água é essencial para a produção adequada das cervejas; e paralelamente, o projeto de captação do esgoto seria responsável pela correta destinação dos rejeitos dos processos produtivos.</p>

          <h3>Processo</h3>
          <p>Realizamos assim o acompanhamento da obra, que estava sendo executada em paralelo, com medições in loco de elementos construtivos e distâncias como apresentadas no local. Coletados os dados, estes foram convertidos para programa de desenho técnico 3D, no caso o Revit, para posterior regularização junto aos órgãos públicos necessários.</p>
          <p>Os projetos hidrossanitário e de drenagem foram desenvolvidos com apoio do software Qi Hidrossanitário, um programa de instalações hidrossanitárias prediais que permite o lançamento da tubulação do projeto como um todo, englobando seus vários pavimentos e permitindo a visualização tridimensional do conjunto, compatibilizando assim os projetos evitando retrabalhos.</p>
          <p>Finalmente, os sistemas desenvolvidos em âmbito de projeto foram executados na indústria cervejeira Panamex. Entregamos o sistema de fornecimento de água com pressão adequada para a correta trabalhabilidade dos maquinários ali instalados, possibilitando o início das atividades produtivas da empresa.</p>
        </div>
      ),
      images: []
    },
    {
      id: ITEM.INDUSTRIAL_PACKPLUS,
      categoryId: CATEGORY.INDUSTRIAL,
      clientId: CLIENT.PACKPLUS,
      textJsx: (
        <div>
          <h3>Contato</h3>
          <p>O proprietário da empresa Pack Plus, indústria de embalagens para produtos médicos, localizada em Ibiporã/PR, entrou em contato com a Quéops Engenharia devido a trabalhos prestados anteriormente para outra empresa de sua posse. A Pack Plus necessitava regularização perante a ANVISA, com execução de PBA (Projeto Básico Arquitetônico).</p>
          <p></p>

          <h3>Processo</h3>
          <p>Compilados os documentos referentes à indústria contratante, realizamos levantamento das dimensões executadas do galpão e sua consonância com as apresentadas em projeto. Paralelamente, os processos de produção da empresa foram analisados in loco pelo corpo de engenheiros da Quéops Engenharia, mapeando os seguintes deslocamentos:</p>
          <ul>
            <li>De processos produtivos;</li>
            <li>Matéria-prima;</li>
            <li>Funcionários;</li>
            <li>Clientes;</li>
            <li>Resíduos: recicláveis, descartáveis e inflamáveis;</li>
            <li>Produtos semiacabados e acabados.</li>
          </ul>
          <p>Realizou-se então, um novo layout e projeto arquitetônico das instalações do galpão industrial requeridos pelos órgãos governamentais vigentes, como ANVISA, Corpo de Bombeiros e prefeitura de Ibiporã/PR.</p>
        </div>
      ),
      images: []
    },
  ],
  [CATEGORY.RESIDENCIAL]: [
    {
      id: ITEM.RESIDENCIAL_PELEGRINI,
      categoryId: CATEGORY.RESIDENCIAL,
      clientId: CLIENT.ADRIANA_PELEGRINI,
      textJsx: (
        <div>
          <h3>Contato</h3>
          <p>Com o sonho de construir sua casa própria em condomínio fechado, nossa cliente de Presidente Prudente/SP encontrava dificuldades diante dos valores abusivos cobrados por construtores locais.</p>

          <h3>Processo</h3>
          <p>Ao contatar a Quéops Engenharia, realizamos estudos de necessidades baseados no limite de investimento desejado pela cliente para viabilização do empreendimento. Com auxílio do software Revit, desenvolvemos projeto em 3D de um sobrado com aproximadamente 230 m² visando a otimização dos espaços, simplicidade e estética. Foram utilizados métodos construtivos alternativos, como fechamento em blocos de concreto, pisos em concreto polido e cimento queimado, revestimento interno em gesso e externo em textura além de lajes em vigotas protendidas pré-moldadas.</p>
          <p>Todas as soluções foram aprovadas pela cliente, que se diz satisfeita com a redução de custos em aproximadamente 30%, conseguindo realizar o sonho da casa própria com preço justo!</p>
        </div>
      ),
      images: [IMAGE_CASE_RESIDENCIAL_1, IMAGE_CASE_RESIDENCIAL_2]
    },
  ],
  [CATEGORY.REPORT]: [
    {
      id: ITEM.REPORT_CONDOMINIO_UPPER,
      categoryId: CATEGORY.REPORT,
      clientId: CLIENT.CONDOMINIO_UPPER,
      textJsx: (
        <div>
          <h3>Laudo técnico</h3>
          <h3>Contato</h3>
          <p>Iniciamos nossa relação com o condomínio UPPER - Jardim Botânico, na cidade de Londrina/PR, devido à necessidade dos condôminos em realizar um laudo técnico que identificasse as anomalias construtivas e falhas de manutenção do edifício – com a análise do risco oferecido aos usuários, ao meio ambiente e ao patrimônio – que interferem e prejudicam a saúde e habitabilidade, frente ao desempenho dos sistemas construtivos e elementos vistoriados da edificação. Ademais, aferição das condições atuais do condomínio em relação às divisas e revestimentos, visando resguardar-se de quaisquer interferências em sua estrutura causada por obras nos arredores.</p>

          <h3>Direito do condomínio</h3>
          <p>De acordo com o Código de Defesa do Consumidor, para qualquer defeito construtivo que apareça na obra, só terá direito à indenização pelo construtor, a ocorrência que for comprovadamente detectada nos cinco primeiros anos, contados a partir da entrega do imóvel.</p>
          <p>Para detecção de tais defeitos, faz-se importante o olhar técnico de engenheiro civil, que, através do laudo técnico, apresenta seu parecer sobre as condições dos sistemas construtivos da edificação.</p>

          <h3>Processo</h3>
          <p>O processo de realização de laudo técnico se iniciou pela identificação do imóvel paralelo às vistorias in loco, com registro fotográfico e análise dos sistemas construtivos. As fotografias foram compiladas em documento conforme sistema analisado, problema detectado e sua respectiva localização na edificação. Em seguida, os sistemas construtivos vistoriados foram descritos um a um, com referência às imagens apresentadas no relatório fotográfico.</p>
          <p>A Quéops Engenharia dispõe de sistema de definição de ordem de prioridade de execução de reparos na edificação, com identificação dos graus de risco inerentes às patologias detectadas.</p>
          <p>Ademais, o setor de orçamentos está apto a realizar análise de custos para reparo das patologias, caso requisitado pelo cliente.</p>
        </div>
      ),
      images: [],
    },
    {
      id: ITEM.REPORT_BIOLIMP,
      categoryId: CATEGORY.REPORT,
      clientId: CLIENT.BIOLIMP,
      textJsx: (
        <div>
          <h3>Laudo Estrutural</h3>
          <h3>Contato</h3>
          <p>A BioLimp, indústria de produtos para limpeza e higienização em geral fundada em 1999, está localizada no município de Dourados/MS, sendo sua principal atividade econômica ligada à fabricação de produtos de limpeza e fornecimento de produtos químicos para os segmentos agroindustrial, automotivo, doméstico e industrial. Ao decorrer do tempo, o grande crescimento da empresa culminou na necessidade de um redesign de seu layout para melhor agregar seu processo produtivo, trabalho este executado pelo nosso parceiro, Mosaic Engenharia.</p>
          <p>Foi requerido à nós uma análise estrutural do galpão industrial para detecção de quais paredes e elementos estruturais poderiam ser retirados sem prejudicar a estrutura deste. Tal solução visava deixar o barracão com o maior espaço livre possível para tornar a produção mais contínua, sem perda de tempo por deslocamentos desnecessários de produtos e funcionários, antes atrapalhados pelo excesso de paredes.</p>

          <h3>Processo</h3>
          <p>Utilizamos de equipamentos específicos para podermos detectar os elementos estruturais do galpão. Foram aferidas todas as medidas entre elementos estruturais e vãos.</p>
          <p>Simultaneamente, com uso do software Revit, foi desenvolvido uma maquete 3D do empreendimento com os elementos em escala real para análise estrutural mais acurada e melhor visualização das interdependências entre os elementos.</p>
          <p>Finalmente, elaboramos o relatório técnico fotográfico com as devidas identificações de demolição e soluções estruturais para que o novo layout de processos industriais pudesse ser definido.</p>
        </div>
      ),
      images: [], // pegar imagens do doc
    },
  ],
  [CATEGORY.COMERCIAL]: [
    {
      id: ITEM.COMERCIAL_AUTO_CENTER_BANDEIRANTES,
      categoryId: CATEGORY.COMERCIAL,
      clientId: CLIENT.AUTO_CENTER_BANDEIRANTES,
      textJsx: (
        <div>
          <h3>Contato</h3>
          <p>Hoje a Auto Center Bandeirantes é líder no mercado de conserto, manutenção e venda de produtos e serviços automotivos.  Representa as maiores empresas fornecedoras de peças, equipamentos e pneus, gerando empregos, renda e bem estar de clientes e parceiros na cidade de Londrina/PR.</p>
          <p>Nossos caminhos se cruzaram perante a necessidade de reforme e ampliação em uma das sedes da Auto Center Bandeirantes. Com a parceria da Mosaic Engenharia, foi elaborado todo um novo layout para os serviços e depósitos da oficina, assim como um moderno projeto arquitetônico para os novos escritórios e ambientes.</p>

          <h3>Diferencial</h3>
          <p>Com uso de software em tecnologia BIM (Building Information Modeling), elaboramos o projeto executivo em 3D, levantamento quantitativo de materiais e serviços para a reforma e ampliação dos ambientes.</p>

          <h3>Processo</h3>
          <p>Utilizamos de tecnologias diferenciadas e um detalhado planejamento para podermos cumprir com as expectativas da oficina, já que as demolições, rampas e novas estruturas em concreto armado deveriam ser finalizadas em uma semana durante a parada da mesma para o período de carnaval.</p>
          <p>A obra é realizada em estrutura mista, variando concreto armado, alvenaria, estrutura leve de aço, pisos e paredes em drywall. Assim conseguimos unir economia, velocidade de execução, uma obra limpa e um moderno visual.</p>
        </div>
      ),
      images: [],
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
