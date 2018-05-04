import React, { Component } from 'react';

import './Parceiros.scss';
import MosaicLogo from "../../img/mosaic-logo.png";


class Parceiros extends Component {
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

          <div className='conteudo'>
            <article>
              <a target="_blank" rel="noopener noreferrer" href="https://www.mosaic.eng.br/">
                <h3>Mosaic</h3>
                <img src={MosaicLogo} alt="http://via.placeholder.com/350x150" />
              </a>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Parceiros;
