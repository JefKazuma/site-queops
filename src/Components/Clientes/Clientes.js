import React, { Component } from 'react';
import Slider from 'react-slick';
import './Clientes.scss';

import Clientes1 from "../../img/clientes/1.png";
import Clientes2 from "../../img/clientes/2.jpg";
import Clientes3 from "../../img/clientes/3.png";
import Clientes4 from "../../img/clientes/4.png";
import Clientes5 from "../../img/clientes/5.png";
import Clientes6 from "../../img/clientes/6.png";
import Clientes7 from "../../img/clientes/7.png";

class Clientes extends Component {
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
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
        prevArrow: <this.SamplePrevArrow />,
        nextArrow: <this.SampleNextArrow />
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

  render() {
    return (
      <div id='clientes'>
        <div>
          <h2>Clientes</h2>
          <div className='pagetitle-separator'>
            <div className='pagetitle-separator-border'>
              <div className='pagetitle-separator-box'></div>
            </div>
          </div>
          <Slider {...this.state.settings}>
            <div>
              <img src={Clientes1} alt={Clientes1} />
            </div>
            <div>
              <img src={Clientes2} alt={Clientes2} />
            </div>
            <div>
              <img src={Clientes3} alt={Clientes3} />
            </div>
            <div>
              <img src={Clientes4} alt={Clientes4} />
            </div>
            <div>
              <img src={Clientes5} alt={Clientes5} />
            </div>
            <div>
              <img src={Clientes6} alt={Clientes6} />
            </div>
            <div>
              <img src={Clientes7} alt={Clientes7} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Clientes;
