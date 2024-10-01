import React from 'react'

function WeHave() {
  return (
    <div className='WeHave'>
      <div className="container ">
        <h3 className='WeHave__title'>У Нас Есть</h3>
        <div className="WeHave__block">
          <div className='WeHave__speed'>
            <h6 className='WeHave__freedom'>Скорость</h6>
            <p className='WeHave__benefit'>Мы стремимся <br />быстро получить <br /> результат.</p>
          </div>
          <div className='WeHave__speed'>
            <h6 className='WeHave__freedom'>Свобода</h6>
            <p className='WeHave__benefit'>Предлагаем <br /> управлять <br /> своими <br /> веб-сайтами.</p>
          </div>
          <div className='WeHave__speed'>
            <h6 className='WeHave__freedom'>Выгода</h6>
            <p className='WeHave__benefit'>Наши цены <br /> доступны для <br /> различных <br /> бизнесов.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeHave
