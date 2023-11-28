import '../blocks/nav/nav.css';

function Nav({pos}) {

  const navClassName = (pos === 'header' ? 'nav nav_header' : 'nav nav_footer');

  return (
    <nav className={navClassName}>
      { pos === 'header' ? <></> : <a href="/" className="nav__link">Расчёт стоимости</a>}
      <a href="/" className="nav__link">Услуги</a>
      <a href="/" className="nav__link">Виджеты</a>
      <a href="/" className="nav__link">Интеграции</a>
      { pos === 'header' ? <></> : <a href="/" className="nav__link">Наши клиенты</a>}
      <a href="/" className="nav__link">Кейсы</a>
      { pos === 'header' ? <></> : <a href="/" className="nav__link nav__link_footer-mbl">Благодарственные письма</a>}
      { pos === 'header' ? <a href="/" className="nav__link nav__link_mobil">Сертификаты</a> : <a href="/" className="nav__link">Сертификаты</a>}
      { pos === 'header' ? <></> : <a href="/" className="nav__link">Блог на Youtube</a>}
      { pos === 'header' ? <></> : <a href="/" className="nav__link">Вопрос / Ответ</a>}
    </nav>
  )
}

export default Nav;