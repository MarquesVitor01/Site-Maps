import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testemunho.css'; // Estilos CSS para o componente

const Testemunho = () => {
  // Dados dos testemunhos
  const testimonials = [
    { id: 1, title: "Sansão Bike Peças", video: "../../../img/whats-video (1).mp4"},
    { id: 2, title: "Evaldo Palacio", video: "../../../img/whats-video (2).mp4"},
    { id: 3, title: "Wf Multimarcas", video: "../../../img/whats-video (3).mp4"},
    { id: 4, title: "Gesso J Dea", video: "../../../img/whats-video (4).mp4"},
  ];

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        &#10094;
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-next-arrow`} onClick={onClick}>
        &#10095;
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '10%',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: dots => (
      <ul className="custom-dots">
        {dots}
      </ul>
    ),
  };

  return (
    <div id="comentarios" className="testimonial-container">
      <h1 className="testemunho-title">
        Clientes satisfeitos 😄
      </h1>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-slide">
            <video
              className="testimonial-video"
              loop
              controls
              src={testimonial.video}
              type="video/mp4"
            />
            <h2 className="testimonial-title">{testimonial.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testemunho;