import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      classe: 'bg-color-transparent',
      isMobile: false
    }
    this.openMenu = this.openMenu.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      if (window.innerWidth >= 767) {
        this.setState({
          classe: window.scrollY === 0 ? 'bg-color-transparent' : 'bg-color-light-dark'
        });
      }
    });
  }

  openMenu() {
    this.setState(prevState => ({
      isMobile: !prevState.isMobile
    }))
  }

  render() {
    return (
      <header className={this.state.classe}>
        <div>
          <a className='logo' href='/' title='Quéops Engenharia'>Quéops Engenharia</a>
          <i className='fa fa-bars menu-mobile' onClick={this.openMenu}></i>
          <nav className={`menu ${this.state.isMobile ? 'active' : ''}`}>
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