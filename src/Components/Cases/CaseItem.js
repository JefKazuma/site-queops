import React from 'react'

import './Cases.scss'


class CaseItem extends React.Component {

  openModal = () => this.props.openModal(this.props.caseItem)

  render = () => {
    const {caseItem} = this.props
    return (
      <a title='Clique aqui para mais informações' onClick={this.openModal}>
        <h3 className="cases-title">{caseItem.title}</h3>
        <li className='cases-item' style={{backgroundImage: 'url(' + caseItem.backgroundImage + ')'}}>
          <div className='cases-text'>
            <a title='Clique aqui para mais informações' onClick={this.openModal}>
              Leia mais
            </a>
          </div>
          <div className='cases-item-background' style={{backgroundImage: 'url(' + caseItem.backgroundImage + ')'}}></div>
        </li>
      </a>
    )
  }
}

export default CaseItem
