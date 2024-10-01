import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Teachers.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


import mymy1 from '../img/mymy1.png';
import ymym2 from '../img/ymym2.png';
import mymy3 from '../img/mymy3.png';
import mymy4 from '../img/mymy4.png';
import mymy5 from '../img/mymy5.png';
import mymy6 from '../img/mymy6.png';



function Teachers() {

    return (
        <div className='teachers'>
            <div className="container">

                <div className="teachers__card-content">
                    <div className="teachers__card-wrapper">
                        <Swiper
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                480: {
                                    slidesPerView: 1,
                                },
                                320: {
                                    slidesPerView: 1,
                                },
                                // 270: {
                                //     slidesPerView: 1,
                                // },
                                // 250: {
                                //     slidesPerView: 1,
                                // }

                            }}
                            slidesPerView={3}
                            spaceBetween={90}
                            
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={mymy1} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">HTMl</h2>
                                        <p className="teachers__descripter">Frontend разработчик</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={ymym2} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">CSS</h2>
                                        <p className="teachers__descripter">Backend разработчик</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={mymy3} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">SASS</h2>
                                        <p className="teachers__descripter">Руководитель</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={mymy4} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">JS</h2>
                                        <p className="teachers__descripter">Мобилограф</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={mymy5} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">JQuery</h2>
                                        <p className="teachers__descripter">Fullstack разработчик</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="teachers__card-image">
                                    <div className="teachers__image-content">
                                        <span className="teachers__overlay"></span>
                                        <div className="teachers__image-card">
                                            <img src={mymy6} alt="img" className='teachers__img' />
                                        </div>
                                    </div>
                                    <div className="teachers__image-content">
                                        <h2 className="teachers__name">DF</h2>
                                        <p className="teachers__descripter">CMM</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Teachers
