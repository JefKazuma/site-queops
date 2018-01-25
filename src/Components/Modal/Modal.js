import React, { Component } from 'react';
import Baron from 'reboron/OutlineModal';
import Slider from 'react-slick';
import Lightbox from "react-image-lightbox";
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    
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

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  
  showModal(item) {
    this.addClassModal();
    this.setState({
      title: item.title,
      text: item.text,
      imgs: item.imgs
    })
    this.refs.modal.show();
  }
  
  hideModal() {
    this.removeClassModal();
    this.refs.modal.hide();
  }
  
  removeClassModal() {
    document.body.classList.remove('modal-open')
  }
  
  addClassModal() {
    document.body.classList.add('modal-open')
  }

  openImage(id) {
    this.setState({
      openImg: id,
      isOpen: true
    });
  }

  render() {
    return (
      <Baron ref={'modal'} keyboard={false} onHide={() => this.removeClassModal()} modalStyle={this.state.modalStyle} contentStyle={this.state.contentStyle}>
        <div className='custom-modal'>
          <div className='custom-modal-title'>
            <h2>{this.state.title}</h2>
            <i className='fa fa-times-circle' onClick={() => this.hideModal()}></i>
          </div>
          <div className='custom-modal-text'>
            {this.state.text}
          </div>
          <div className='custom-moda-galery'>
            <Slider {...this.state.settings}>
              {
                this.state.imgs.map((item, id) => (
                  <div key={id} onClick={() => this.openImage(id)}>
                    <img src={item} alt={item} />
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
        {
          this.state.isOpen &&
          <Lightbox
            mainSrc={this.state.imgs[this.state.openImg]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            nextSrc={this.state.imgs[(this.state.openImg + 1) % this.state.imgs.length]}
            prevSrc={this.state.imgs[(this.state.openImg + this.state.imgs.length - 1) % this.state.imgs.length]}
            onMovePrevRequest={() =>
              this.setState({
                openImg: (this.state.openImg + this.state.imgs.length - 1) % this.state.imgs.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                openImg: (this.state.openImg + 1) % this.state.imgs.length,
              })
            }/>
        }
      </Baron>
    );
  }
}

export default Modal;