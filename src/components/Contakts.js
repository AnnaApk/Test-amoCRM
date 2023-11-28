import telegram from '../images/telegram.svg';
import viber from '../images/viber.svg';
import whatsapp from '../images/whatsapp.svg';

import '../blocks/contakts/contakts.css';

function Contakts({pos}) {

  const style = 'contakts ' + ( pos === 'footer' ? 'contakts_footer' : 'contakts_header');

  return (
    <div className={style}>
      <a href="tel:+75555555555" className="contakts__tel" >+7 555 555-55-55</a>
      <div className='contakts__call-group'>
        <a className="" href="https://www.telegram.com/" target="_blank" rel='noreferrer'>
          <img src={telegram} alt="Иконка telegram" />
        </a>
        <a className="" href="https://www.viber.com/" target="_blank" rel='noreferrer'>
          <img src={viber} alt="Иконка viber" />
        </a>
        <a className="" href="https://www.whatsapp.com/" target="_blank" rel='noreferrer'>
          <img src={whatsapp} alt="Иконка whatsapp" />
        </a>
      </div>
     { pos === 'footer' ? <div>Москва, Путевой проезд 3с1, к 902</div> : <></>}
    </div>
  )
}

export default Contakts;