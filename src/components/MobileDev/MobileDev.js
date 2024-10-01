import React from 'react'
import "./MobileDev.css";
import preview from "../img/preview.png"


function MobileDev() {
  return (
    <div className='MobileDev' >
      <div className='container'>
        <div className='MobileDev__Home'>
          <h1 className='MobileDev__title'>Мобильная разработка</h1>
          <div className='MobileDev__text'>
            <p className='MobileDev__sentence'>
              Мобильный разработчик — это программист, <br />
              который пишет приложения <br />
              для мобильных устройств. К ним относятся <br />
              не только смартфоны и планшеты, <br />
              но и умные часы, фитнес-трекеры, <br />
              электронные читалки, GPS-навигаторы и все <br />
              остальные штуки с экраном и клавиатурой, <br />
              которые можно носить с собой.
            </p>
            <img className='MobileDev__img' src={preview} alt="preview" />
          </div>
        </div>

        <div className='MobileDev__Salary'>
          <div className='container'>
            <h2 className='MobileDev__subTitle'>Зарплата</h2>
            <div className='MobileDev__BossBlock'>
              <div className='MobileDev__Block'>
                <h5 className='MobileDev__developer'>1. Зарплата <br /> у Junior <br /> разработчиков </h5>
                <p className='MobileDev__som'> От 20-50 тысяч сомов</p>
              </div>
              <div className='MobileDev__Block'>
                <h5 className='MobileDev__developer'>2. Зарплата <br /> у  Middle <br /> разработчиков</h5>
                <p className='MobileDev__som'>От 50-150 тысяч сомов</p>
              </div>
              <div className='MobileDev__Block'>
                <h5 className='MobileDev__developer'>3. Зарплата <br /> у Senior <br /> разработчиков</h5>
                <p className='MobileDev__som'>От 150 и выше сомов</p>
              </div>
            </div>
          </div>
        </div>














      </div>
    </div>

  )
}


export default MobileDev
