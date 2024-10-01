import React from 'react'
import footerLogo from '../img/logo (1).png'



function Footer() {
  return (
    <div className='Footer'>
      <div className="container ">
        <img className='Footer__logo' src={footerLogo} alt="" />
        <div className='Footer__bigBlock'>
          <div className='Footer__bigHome'>
            <h6 className='Footer__home'>Главная</h6>
            <p className='Footer__aboutUs'>О нас</p>
            <p className='Footer__advantages'>Преимущества</p>
            <p className='Footer__cours'>Все курсы</p>
            <p className='Footer__study'>Обучение</p>
          </div>
         
          <div className='Footer__crown'>
            <h6 className='Footer__adres'>Адрес</h6>
            <p className='Footer__kelechek'>Келечек, ТЦ <br /> Корона - 1 этаж</p>
          </div>
          <div className='Footer__allContacts'>
            <h6 className='Footer__contact'>Контакты</h6>
            <p className='Footer__brotherNum'>+ 996 771 830 438</p>
            <p className='Footer__sisterNum'>+ 996 708 914 481</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
