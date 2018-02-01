import React, { Component } from 'react';
import Modal from '../Modal/Modal';

import CaseIndustrial1 from '../../img/cases/industrial/1.png';
import CaseIndustrial2 from '../../img/cases/industrial/2.png';
import CaseIndustrial3 from '../../img/cases/industrial/3.png';
import CaseIndustrial4 from '../../img/cases/industrial/4.png';
import CaseIndustrial5 from '../../img/cases/industrial/5.jpg';
import CaseIndustrial6 from '../../img/cases/industrial/6.png';

import CaseResidencial1 from "../../img/cases/residencial/1.jpg";
import CaseResidencial2 from "../../img/cases/residencial/2.jpg";

import './Cases.scss';

class Cases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: [
        {
          title: 'Industrial',
          text: (
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
          imgs: [CaseIndustrial1, CaseIndustrial2, CaseIndustrial3, CaseIndustrial4, CaseIndustrial5, CaseIndustrial6]
        },
        {
          title: 'Residencial',
          text: (
            <div>
              <p>Com o sonho de construir sua casa própria em condomínio fechado, a cliente Adriana Pelegrini, de Presidente Prudente/SP, encontrava dificuldade diante dos valores abusivos cobrados por construtores da cidade, chegando a R$ 3.000,00/m².</p>
              <p>Ao contatar a Quéops Engenharia, foi realizado estudo de necessidades e limitação financeira da cliente para viabilização do empreendimento. Com auxílio do software Revit, desenvolveu-se projeto em 3D de sobrado com 230 m² que visava otimização dos espaços, simplicidade e estética. Foram utilizados métodos construtivos alternativos, com fechamento em bloco de concreto, pisos em concreto polido e cimento queimado, revestimento interno em gesso e externo em textura e lajes protendidas pré-moldadas.</p>
              <p>Todas as soluções foram aprovadas pela cliente Adriana, que se disse satisfeita com a redução de custos em aproximadamente 50%, conseguindo realizar o sonho da casa própria com preço justo e atendendo suas necessidades de moradia.</p>
            </div>
          ),
          imgs: [CaseResidencial1, CaseResidencial2]
        }
      ]
    };
  }

  openModal(typeModal) {
    this.modal.showModal(this.state.cases[typeModal]);
  }

  render() {
    return (
      <div id='cases'>
        <div>
          <h2>Cases</h2>
          <div className='pagetitle-separator'>
            <div className='pagetitle-separator-border'>
              <div className='pagetitle-separator-box'></div>
            </div>
          </div>
          <ul className='cases-list'>
            <a title='Clique aqui para mais informações' onClick={() => this.openModal(0)}>

              <li className='cases-item' style={{backgroundImage: 'url(' + CaseIndustrial1 + ')'}}>

                <div className='cases-text'>
                  <h3>Industrial</h3>
                  <a title='Clique aqui para mais informações' onClick={() => this.openModal(0)}>
                    Leia mais
                  </a>
                </div>
                <div className='cases-item-background' style={{backgroundImage: 'url(' + CaseIndustrial1 + ')'}}></div>
              </li>
             </a>
            <a title='Clique aqui para mais informações' onClick={() => this.openModal(1)}>
              <li className='cases-item'>
                <div className='cases-text'>
                  <h3>Residencial</h3>
                  <a title='Clique aqui para mais informações' onClick={() => this.openModal(1)}>
                    Leia mais
                  </a>
                </div>
                <div className='cases-item-background' style={{backgroundImage: 'url(' + CaseResidencial1 + ')'}}></div>
              </li>
            </a>
          </ul>
        </div>
        {
          <Modal onRef={(modal) => (this.modal = modal)}/>
        }
      </div>
    );
  }
}

export default Cases;
