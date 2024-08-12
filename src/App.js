import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './App.css';
import Bots from './Components/Bots';
import Heda from './Components/Heda';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import robot1 from './assets/images/robot1.png'
import robot2 from './assets/images/robot2.png'
import robot3 from './assets/images/robot3.png'
import robot4 from './assets/images/robot4.png'
import robot5 from './assets/images/robot5.png'
import robot6 from './assets/images/robot6.png'
import robot7 from './assets/images/robot7.png'
import robot8 from './assets/images/robot8.png'
import robot9 from './assets/images/robot9.png'
import robot10 from './assets/images/robot10.png'





function App() {
  const [swiperImages, setSwiperImages] = useState([
    robot1,
    robot2,
    robot3,
    robot4,
    robot5,
    robot6,
    robot7,
    robot8,
    robot9,
    robot10,
  ]);

  const handleAddImage = (image) => {
    if (!swiperImages.includes(image)) {
      setSwiperImages([...swiperImages, image]);
    }
  };

  const handleRemoveImage = (image) => {
    setSwiperImages(swiperImages.filter((img) => img !== image));
  };

  return (
    <div className="container">
       <Heda />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
{/* BTN */}
             <button onClick={() => handleRemoveImage(image)} class="Btn">
              <div class="sign">
                <svg
                  viewBox="0 0 16 16"
                  class="bi bi-trash3-fill"
                  fill="currentColor"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                  ></path>
                </svg>
              </div>

              <div class="text">Discard</div>
            </button>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

        
         
        
      <Bots onImageClick={handleAddImage} />

{/* BTN2 */}

    </div>
    
  );
}

export default App;
