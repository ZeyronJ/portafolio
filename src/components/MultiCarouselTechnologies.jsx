import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { space } from 'postcss/lib/list';

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <div
      className={currentSlide >= 1 ? '' : className}
      style={{
        ...style,
        display: 'block',
        marginRight: '1.5rem',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <div
      className={currentSlide === 0 ? '' : className}
      style={{
        ...style,
        display: 'block',
        marginLeft: '1.5rem',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default function MultiCarouselTechnologies({ technologies }) {
  const settings = {
    className: 'slider variable-width',
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: technologies.length > 4,
    draggable: technologies.length > 4,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
          draggable: false,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: technologies.length > 4,
          draggable: false,
        },
      },
    ],
  };

  return (
    <div className='relative -ml-1'>
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className='pr-2' // Contenedor adicional con padding
          >
            <div className='text-xs bg-slate-700 rounded-full px-2 py-1'>
              <span>{tech}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
