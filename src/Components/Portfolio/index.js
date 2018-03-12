import React, { Component } from 'react';

import './index.scss';
import Modal from './Modal'
import Category from './Category'
import { categories } from './data'


class Portfolio extends Component {
  constructor() {
    super()

    this.state = {
      isModalVisible: false,
      selectedCategoryId: undefined,
    }
  }

  handleCategoryClicked = categoryId => {
    this.setState({
      selectedCategoryId: categoryId,
      isModalVisible: true
    })

  }

  handleCloseModal = () => {
    this.setState({
      isModalVisible: false,
    })
  }

  render = () => {
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
            {Object.values(categories).map(category =>
              <Category
                key={category.id}
                category={category}
                onClick={this.handleCategoryClicked}
              />)
            }
          </ul>
        </div>
        {this.state.isModalVisible && this.state.selectedCategoryId &&
          <Modal
            selectedCategoryId={this.state.selectedCategoryId}
            onClose={this.handleCloseModal}
          />
        }
      </div>
    )
  }
}

export default Portfolio
