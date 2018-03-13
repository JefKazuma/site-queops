import React from 'react'

import './index.scss'


class Category extends React.Component {
  handleClick = () => this.props.onClick(this.props.category.id)

  render = () => {
    const {category} = this.props
    const img = category.backgroundImage
    return (
      <div
        className='portfolio-category'
        title='Clique aqui para mais informações'
        onClick={this.handleClick}
      >
        <div className='portfolio-category-title'>
          <h3>
            {category.title}
          </h3>
        </div>
        <div
          className='portfolio-category-image'
          style={{backgroundImage: 'url(' + img + ')'}}
        >
        </div>
      </div>
    )
  }
}

export default Category
