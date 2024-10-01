import React from 'react'
import "./CmmDev.css"
import people from "../img/people.png"

function CmmDev() {
  return (
    <div className='CmmDev' >
    <div className='container'>
      <div className='CmmDev__Home'>
        <h1 className='CmmDev__title'>Смм курсы</h1>
        <div className='CmmDev__text'>
          <p className='CmmDev__sentence'>
          SMM-специалист (от англ. <br />
           Social Media Marketing manager) <br />
            продвигает бренды, товары и услуги через соцсети: <br />
             Вконтакте, Однокласников, Телеграм, Ютуб. <br />
              SMM-специалист исследует целевую аудиторию <br />
               и разрабатывает контентную стратегию на <br />
                основе потребностей и интересов пользователей.
          </p>
          <img className='CmmDev__img' src={people} alt="" />
        </div>
      </div>

      <div className='CmmDev__Salary'>
        <div className='container'>
          <h2 className='CmmDev__subTitle'>Зарплата</h2>
          <div className='CmmDev__BossBlock'>
            <div className='CmmDev__Block'>
              <h5 className='CmmDev__developer'>1. Зарплата <br /> у Junior <br /> Сммщиков </h5>
              <p className='CmmDev__som'> От 8-10 тысяч сомов</p>
            </div>
            <div className='CmmDev__Block'>
              <h5 className='CmmDev__developer'>2. Зарплата <br /> у  Middle <br /> Сммщиков</h5>
              <p className='BackendDev__som'>От 10-20 тысяч сомов</p>
            </div>
            <div className='CmmDev__Block'>
              <h5 className='CmmDev__developer'>3. Зарплата <br /> у Senior <br /> Сммщиков</h5>
              <p className='CmmDev__som'>От 30 и выше сомов</p>
            </div>
          </div>
        </div>
      </div>














    </div>
  </div>
  )
}

export default CmmDev
