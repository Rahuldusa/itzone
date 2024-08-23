import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css'
import cc6 from '../../img/cc6.png';
import part3 from '../../img/part3.jpg';
import enterprise from '../../img/Enterprise_Banner.jpg'
import licenses5 from "../../img/licenses5.png";
import wifi5 from '../../img/WIFI5.jpg';
import SS2 from '../../img/SS2.jpg';

function Banner() {
  return (
    <div className='carousel-container' style={{ position: 'relative' }}>
      <div className='row'>
        <div className='col-12'> 
          <Carousel>
            <Carousel.Item>
              <div className="carousel-overlay">
                <img 
                  src={part3} 
                  alt="Los Angeles" 
                  className='content-img'
                />
                <div className="overlay-content">
                <div className='content'>
                  <div className='content-maintext'>
                    <span>Repair Your Laptop &amp; Desktop Computer</span>
                  </div>
                  <div className='content-subtext'>
                    <span1>We provide always our best services to our clients and always try to achieve our client's trust and satisfaction</span1>
                  </div>
                </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="carousel-overlay">
      <img 
        src={cc6} 
        alt="Los Angeles" 
        className='content-img' 
      />
      <div className="overlay-content">
        <div className='content'>
          <div className='content-maintext'>
            <span>Empowering Peace of Mind, Enhancing Security </span>
          </div>
          <div className='content-subtext'>
            <span1>Elevating Security Standards with State-of-the-Art CCTV Solutions for Unwavering Protection and Peace of Mind</span1>
          </div>
        </div>
      </div>
    </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-overlay">
                <img 
                  src={enterprise} 
                  alt="Los Angeles" 
                  className='content-img'
                />
                <div className="overlay-content">
                <div className='content'>
                  <div className='content-maintext'>
                    <span>Driving Transformational Growth</span>
                  </div>
                  <div className='content-subtext'>
                    <span1>Unleashing the Power of Next-Generation Enterprise Solutions for Seamless Innovation and Success at Scale</span1>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-overlay">
                <img 
                  src={SS2} 
                  alt="Los Angeles" 
                  className='content-img'
                />
                <div className="overlay-content">
                <div className='content'>
                  <div className='content-maintext'>
                    <span>Software Licensing Service</span>
                  </div>
                  <div className='content-subtext'>
                    <span1>Empowering Your Business with Effortless and Secure Software Licensing Solutions</span1>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-overlay">
                <img 
                  src={wifi5} 
                  alt="Los Angeles" 
                  className='content-img'
                />
                <div className="overlay-content">
                <div className='content'>
                  <div className='content-maintext'>
                    <span>Enterprise Wi-Fi Solutions</span>
                  </div>
                  <div className='content-subtext'>
                    <span1>Transform Your Business with Scalable, Secure, and High-Performance Enterprise Wi-Fi Solutions</span1>
                  </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner;
