import React, { Component } from 'react';
import './Parceiros.scss';

class Contato extends Component {
  render() {
    return (
      <div id='contato'>
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
                  <img src="http://via.placeholder.com/350x150" alt=""/>
                </a>
                <p>aqui tinha os telefones</p>
              </article>

            <aside>
              <p>aqui era o mapa</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;
