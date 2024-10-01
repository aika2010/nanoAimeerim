import React from 'react'
import man2 from "../img/man2.png"

function Onlain() {
  return (
    <div className='Onlain'>
      <div className='container '>
        <div className='Onlain__block'>
          <div>
            <h3 className='Onlain__title'>NANO.IT ОНЛАЙН</h3>
            <p className='Onlain__sentence'>Откройте для себя мир <br /> возможностей в области <br /> программирования вместе с <br /> Nano.IT!</p>
          </div>
          <img className='Onlain__img' src={man2} alt="" />
        </div>
      </div>

    </div>
  )
}


// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

export default Onlain
