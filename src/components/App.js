import Decoration from './Decoration';
import Header from './Header';
import Footer from './Footer';

import '../blocks/app/app.css';
import '../blocks/app/__content/app__content.css';
import '../blocks/main/main.css';

function App() {

  return (
    <div className='app'>
      <Decoration />
      <div className='app__content'>
        <Header />
        <main className='main'>
          <div className='main__section-1'>
            <h1 className='main__title'>Зарабатывайте больше <br></br>
              <span className='main__title-span'>с WELBEX</span>
            </h1>
            <p className='main__subtitle'>Развиваем и контролируем продажи за вас</p>
          </div>
          <div className='main__section-2'>
            <p className='main__content-title'>Вместе с <span className='main__title-span_small'>бесплатной консультацией</span> мы дарим:</p>
            <div className='main__content'>
              <div>
                <h3 className='main__content-subtitle'>Виджеты</h3>
                <p className='main__content-text'>30 готовых решений</p>
              </div>
              <div>
                <h3 className='main__content-subtitle'>Dashboard</h3>
                <p className='main__content-text'>с показателями вашего бизнеса</p>
              </div>
              <div>
                <h3 className='main__content-subtitle'>Skype Аудит</h3>
                <p className='main__content-text'>отдела продаж и CRM системы</p>
              </div>
              <div>
                <h3 className='main__content-subtitle'>35 дней</h3>
                <p className='main__content-text'>использования CRM</p>
              </div>
            </div>
            <div className='main__content_mobile'>
              <div className='line-container'>
                <hr className='line'></hr>
                <h3 className='main__content-subtitle'>Skype аудит</h3>
              </div>
              <div className='line-container'>
                <hr className='line'></hr>
                <h3 className='main__content-subtitle'>30 виджетов</h3>              </div>
              <div className='line-container'>
                <hr className='line'></hr>
                <h3 className='main__content-subtitle'>Dashboard</h3>
              </div>
              <div className='line-container'>
                <hr className='line'></hr>
                <h3 className='main__content-subtitle'>Месяц аmoCRM</h3>
              </div>
            </div>
            <button className='main__content-btn'>Получить консультацию</button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
