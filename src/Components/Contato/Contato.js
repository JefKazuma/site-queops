import React, { Component } from 'react';
import './Contato.scss';

class Contato extends Component {
  render() {
    return (
      <div id='contato'>
        <div>
          <h2>Contato</h2>
          <div className='pagetitle-separator'>
            <div className='pagetitle-separator-border'>
              <div className='pagetitle-separator-box'></div>
            </div>
          </div>
          <div className='conteudo'>
            <article>
              <i className='fa fa-phone'></i>
              <span>(44) 99827-6382</span>
            </article>
            <aside>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.2223755842397!2d-51.1729479427547!3d-23.30768915148514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44ae67785367%3A0xffbdfaba5608eaca!2sR.+Fernando+de+Noronha%2C+1039a+-+Centro%2C+Londrina+-+PR%2C+86060-410!5e0!3m2!1spt-BR!2sbr!4v1516504159737" width="450" height="300" frameborder="0" allowfullscreen></iframe>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;