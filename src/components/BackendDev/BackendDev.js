import React from 'react'
import "./BackendDev.css"
import computer from "../img/computer.png"
function BackendDev() {
  return (
    <div className='BackendDev' >
    <div className='container'>
      <div className='BackendDev__Home'>
        <h1 className='BackendDev__title'>Backend разработка</h1>
        <div className='BackendDev__text'>
          <p className='BackendDev__sentence'>
          Бэкенд-разработчик (backend developer) — <br />
           это специалист, который занимается серверной <br />
            частью сайтов, мобильных <br />
            и десктопных приложений и игр. <br />
             Он реализует внутреннюю логику <br />
              работы приложения, обеспечивает <br />
              его взаимодействие с базами данных <br />
               и внешними сервисами.
          </p>
          <img className='BackendDev__img' src={computer} alt="" />
        </div>
      </div>

      <div className='BackendDev__Salary'>
        <div className='container'>
          <h2 className='BackendDev__subTitle'>Зарплата</h2>
          <div className='BackendDev__BossBlock'>
            <div className='BackendDev__Block'>
              <h5 className='BackendDev__developer'>1. Зарплата <br /> у Junior <br /> разработчиков </h5>
              <p className='BackendDev__som'> От 50-80 тысяч сомов</p>
            </div>
            <div className='BackendDev__Block'>
              <h5 className='BackendDev__developer'>2. Зарплата <br /> у  Middle <br /> разработчиков</h5>
              <p className='BackendDev__som'>От 80-200 тысяч сомов</p>
            </div>
            <div className='BackendDev__Block'>
              <h5 className='BackendDev__developer'>3. Зарплата <br /> у Senior <br /> разработчиков</h5>
              <p className='BackendDev__som'>От 200 и выше сомов</p>
            </div>
          </div>
        </div>
      </div>














    </div>
  </div>
  )
}

export default BackendDev
