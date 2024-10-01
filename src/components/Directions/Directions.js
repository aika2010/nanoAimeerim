import React from 'react'


import { Link } from 'react-router-dom'

function Directions() {
  return (
    <div className='Directions'>
      <div className="container ">
        <h5 className='Directions__title'>Наши направления</h5>
        <div className='Directions__bigBlock'>
          <div className='Directions__black'>
            <Link to='/MobileDev'>
            <button className='Directions__mobile' >Мобильная разработка</button>
            </Link>
           
          </div>
          <div className='Directions__black'>
            <Link to='/FrontendDev'>
            <button className='Directions__frontend' >Frontend разработка</button>
            </Link>
          
          </div>
        </div>
        <div className='Directions__smallBlock'>
          <div className='Directions__black'>
            <Link to='/BackendDev'>
            <button className='Directions__backend'>Backend разработка</button>
            </Link>
          </div>
          <div className='Directions__black'>
            <Link to='/CmmDev'>
            <button className='Directions__CMM'>CMM курсы</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Directions
