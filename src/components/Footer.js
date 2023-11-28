import '../blocks/footer/footer.css';
import Contakts from './Contakts';
import Nav from './Nav';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div>
          <h2 className='footer__title'>О компании</h2>
          <div className='nav_footer footer__about-company'>
            <a href='/' className='nav__link'>Партнёрская программа</a>
            <a href='/' className='nav__link'>Вакансии</a>
          </div>
        </div>
        <div>
          <h2 className='footer__title'>Меню</h2>
          <Nav pos='footer' />
        </div>
        <div>
          <h2 className='footer__title footer__title_right'>Контакты</h2>
          <Contakts pos='footer'/>
        </div>
      </div>
      <p className='footer__tilda footer__tilda_first'>©WELBEX 2022. Все права защищены.</p>
      <p className='footer__tilda footer__tilda_last'>Политика конфиденциальности</p>
    </footer>
  )
}

export default Footer;