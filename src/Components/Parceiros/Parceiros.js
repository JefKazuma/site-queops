import React, { Component } from 'react';
import Slider from 'react-slick';
import './Parceiros.scss';

import Parceiros1 from "../../img/parceiros/1.png";
import Parceiros2 from "../../img/parceiros/2.jpg";
import Parceiros3 from "../../img/parceiros/3.png";
import Parceiros4 from "../../img/parceiros/4.png";
import Parceiros5 from "../../img/parceiros/5.png";
import Parceiros6 from "../../img/parceiros/6.jpg";
import Parceiros7 from "../../img/parceiros/7.png";

class Parceiros extends Component {
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
        ]
      }
    }
  }
  

  render() {
    return (
      <div id='parceiros'>
        <div>
          <h2>Parceiros</h2>
          <div className='pagetitle-separator'>
            <div className='pagetitle-separator-border'>
              <div className='pagetitle-separator-box'></div>
            </div>
          </div>
          <Slider {...this.state.settings}>
            <div>
              <img src={Parceiros1} alt={Parceiros1} />
            </div>
            <div>
              <img src={Parceiros2} alt={Parceiros2} />
            </div>
            <div>
              <img src={Parceiros3} alt={Parceiros3} />
            </div>
            <div>
              <img src={Parceiros4} alt={Parceiros4} />
            </div>
            <div>
              <img src={Parceiros5} alt={Parceiros5} />
            </div>
            <div>
              <img src={Parceiros6} alt={Parceiros6} />
            </div>
            <div>
              <img src={Parceiros7} alt={Parceiros7} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Parceiros;