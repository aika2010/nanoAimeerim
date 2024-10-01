import React from 'react'
import "./FrontendDev.css"
import frontend from "../img/frontend.png"
function FrontendDev() {
  return (
    <div className='FrontendDev' >
    <div className='container'>
      <div className='FrontendDev__Home'>
        <h1 className='FrontendDev__title'>Frontend разработка</h1>
        <div className='FrontendDev__text'>
          <p className='FrontendDev__sentence'>
          Фронтенд-разработчик (Frontend Developer) — это специалист, <br />
           который создает интерфейсы веб-сайтов и приложений. <br />
            Проще говоря, разрабатывает внешний вид интернет-площадок: <br />
             это картинки, выпадающие списки, анимация, карточки <br />
              товаров и все, с чем может взаимодействовать пользователь.
          </p>
          <img className='FrontendDev__img' src={frontend} alt="preview" />
        </div>
      </div>

      <div className='FrontendDev__Salary'>
        <div className='container'>
          <h2 className='FrontendDev__subTitle'>Зарплата</h2>
          <div className='FrontendDev__BossBlock'>
            <div className='FrontendDev__Block'>
              <h5 className='FrontendDev__developer'>1. Зарплата <br /> у Junior <br /> разработчиков </h5>
              <p className='FrontendDev__som'> От 30-60 тысяч сомов</p>
            </div>
            <div className='FrontendDev__Block'>
              <h5 className='FrontendDev__developer'>2. Зарплата <br /> у  Middle <br /> разработчиков</h5>
              <p className='FrontendDev__som'>От 60-180 тысяч сомов</p>
            </div>
            <div className='FrontendDev__Block'>
              <h5 className='FrontendDev__developer'>3. Зарплата <br /> у Senior <br /> разработчиков</h5>
              <p className='FrontendDev__som'>От 180 и выше сомов</p>
            </div>
          </div>
        </div>
      </div>














    </div>
  </div>

  )
}

export default FrontendDev
