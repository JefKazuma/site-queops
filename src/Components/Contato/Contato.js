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
                <p>
                  <i className='fa fa-phone'   >  </i>
                  (44) 99827-6382
                </p>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Queops.Eng/"><i class="fa fa-facebook-square"></i>facebook.com/Queops.Eng</a>
                </p>
                <p>

                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/qu%C3%A9ops-engenharia/"><i class="fa fa-linkedin"></i>Quéops Engenharia</a>
                </p>
              </article>

            <aside>
              <iframe title='google maps' style={{width: '100%', height: '300px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14656.884669774116!2d-51.17295!3d-23.307733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73316f492bdfe090!2sQu%C3%A9ops+Engenharia!5e0!3m2!1spt-BR!2sbr!4v1517837578375"></iframe>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}


export default Contato;
