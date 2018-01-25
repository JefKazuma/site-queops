import React, { Component } from 'react';
import './Header.scss';
import scroll from "scroll-to-element";

class Header extends Component {
  constructor(props) {
    super(props);
    this.scroll = scroll;
  
    this.state = {
      classe: 'bg-color-transparent',
      isMobile: false,
      configToScroll: {
        offset: -75,
        delay: 0,
        smooth: 'easeInOutQuart',
        duration: 400
      }
    };
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
    }));
  }

  scrollToElement(id) {
    this.setState({
      isMobile: false
    });
    this.scroll(id, this.state.configToScroll);
  }

  render() {
    return (
      <header id='header-menu' className={this.state.classe}>
        <div>
          <a className='logo' onClick={() => this.scrollToElement('#banner')} title='Quéops Engenharia'>Quéops Engenharia</a>
          <i className='fa fa-bars menu-mobile' onClick={this.openMenu.bind(this)}></i>
          <nav className={`menu ${this.state.isMobile ? 'active' : ''}`}>
            <ul>
              <li>
                <a onClick={() => this.scrollToElement('#cases')} title='Quem somos'>Quem somos</a>
              </li>
              <li>
                <a onClick={() => this.scrollToElement('#cases')} title='Cases'>Cases</a>
              </li>
              <li>
                <a onClick={() => this.scrollToElement('#parceiros')} title='Parceiros'>Parceiros</a>
              </li>
              <li>
                <a onClick={() => this.scrollToElement('#contato')} title='Contato'>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;