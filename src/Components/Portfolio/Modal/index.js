import React, { Component } from 'react';
import Baron from 'reboron/OutlineModal';
import Slider from 'react-slick';
import Lightbox from "react-image-lightbox";
import './Modal.scss';

import {
  categories,
  itemsByCategory,
} from '../data'


class Modal extends Component {
  constructor() {
    super()
    this.state = {
      settings: {
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        className: 'center',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
        prevArrow: <this.SamplePrevArrow />,
        nextArrow: <this.SampleNextArrow />
      },
      isOpen: false,
      title: '',
      text: '',
      imgs: [],
      modalStyle: {
        width: 'auto',
        top: '50px',
        left: '50px',
        right: '50px',
        bottom: '50px',
        transform: 'none',
        overflow: 'hidden'
      },
      contentStyle: {
        height: '100%'
      }
    }
  }

  componentDidMount() {
    document.body.classList.add('modal-open')
    this.refs.modal.show()
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open')
    this.refs.modal.hide()
  }

  SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style}}
        onClick={onClick}
      ><i className='fa fa-angle-right'></i></div>
    );
  }

  SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style}}
        onClick={onClick}
      ><i className='fa fa-angle-left'></i></div>
    );
  }

  openImage(id) {
    this.setState({
      openImg: id,
      isOpen: true
    });
  }

  render() {
    const category = categories[this.props.selectedCategoryId]
    const items = itemsByCategory[this.props.selectedCategoryId]
    const item = items && items[0]

    return (
      <Baron
        ref={'modal'}
        keyboard={false}
        onHide={this.props.onClose}
        modalStyle={this.state.modalStyle}
        contentStyle={this.state.contentStyle}
      >
        <div className='custom-modal'>
          <div className='custom-modal-title'>
            <h2>{category && category.title}</h2>
            <i className='fa fa-times-circle' onClick={this.props.onClose}></i>
          </div>
          <div className='custom-modal-text'>
            {item && item.textJsx}
          </div>
          <div className='custom-moda-galery'>
            <Slider {...this.state.settings}>
              {
                item && item.images.map((obj, id) => (
                  <div key={id} onClick={() => this.openImage(id)}>
                    <img src={obj} alt={obj} />
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
        {
          this.state.isOpen &&
          <Lightbox
            mainSrc={item.images[this.state.openImg]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            nextSrc={item.images[(this.state.openImg + 1) % item.images.length]}
            prevSrc={item.images[(this.state.openImg + item.images.length - 1) % item.images.length]}
            onMovePrevRequest={() =>
              this.setState({
                openImg: (this.state.openImg + item.images.length - 1) % item.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                openImg: (this.state.openImg + 1) % item.images.length,
              })
            }/>
        }
      </Baron>
    )
  }
}

export default Modal;
