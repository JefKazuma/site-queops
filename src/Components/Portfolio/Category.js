import React from 'react'

import './index.scss'


class Category extends React.Component {
  handleClick = () => this.props.onClick(this.props.category.id)

  render = () => {
    const {category} = this.props
    return (
      <a title='Clique aqui para mais informações' onClick={this.handleClick}>
        <h3 className="cases-title">{category.title}</h3>
        <li className='cases-item' style={{backgroundImage: 'url(' + category.backgroundImage + ')'}}>
          <div className='cases-text'>
            <a title='Clique aqui para mais informações' onClick={this.handleClick}>
              Leia mais
            </a>
          </div>
          <div className='cases-item-background' style={{backgroundImage: 'url(' + category.backgroundImage + ')'}}></div>
        </li>
      </a>
    )
  }
}

export default Category
