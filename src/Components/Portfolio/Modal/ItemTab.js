import React from 'react'

import './Modal.scss'


class ItemTab extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)

  render = () => {
    return (
      <div
        className='custom-modal-tab'
        onClick={this.handleClick}
      >
        {this.props.item.client.name}
      </div>
    )
  }
}

export default ItemTab
