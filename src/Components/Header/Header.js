import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      classe: 'bg-color-light-dark'
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      this.setState({
        classe: window.scrollY === 0 ? 'bg-color-transparent' : 'bg-color-light-dark' 
      })
    });
  }

  render() {
    return (
      <header className={this.state.classe}>
        <div>
          <a className='logo' href='/' title='Quéops Engenharia'>Quéops Engenharia</a>
          <nav className='menu'>
            <ul>
              <li>
                <a href='/' title='Quem somos'>Quem somos</a>
              </li>
              <li>
                <a href='/' title='Portfólio'>Portfólio</a>
              </li>
              <li>
                <a href='/' title='Depoimentos'>Depoimentos</a>
              </li>
              <li>
                <a href='/' title='Contato'>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;