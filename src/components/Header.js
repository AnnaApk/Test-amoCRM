import logo1 from '../images/part1.svg';
import logo2 from '../images/part2.svg';

import Nav from './Nav';
import Contakts from './Contakts';

import '../blocks/header/header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <div className="header__logo-grp">
          <img alt="logo" className="header__logo" src={logo1}></img>
          <img alt="logo" className="" src={logo2}></img>
        </div>
        <Nav pos='header' />
        <Contakts pos='header' />
      </div>
      
      <p className='header__subtitle'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </header>
  )
}

export default Header;