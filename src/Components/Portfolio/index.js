import React, { Component } from 'react';

import './index.scss';
import Modal from './Modal'
import Category from './Category'
import { categories } from './data'
import FancySeparator from '../FancySeparator'


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
      <div id='portfolio-container'>
        <div id='portfolio'>
          <h2>Cases</h2>
          <FancySeparator />
          <div className='portfolio-list'>
            {Object.values(categories).map(category =>
              <Category
                key={category.id}
                category={category}
                onClick={this.handleCategoryClicked}
              />)
            }
          </div>
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
