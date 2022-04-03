import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = (props) => {
  const renderButton = (id, url) => {
    return (
      <div className="button" id="carouselButton">
        <div id="slide"></div>
        <Link className="link" to={`/${url}/${id}`}>
          Buy Ticket
        </Link>
        <i className="bi bi-ticket-perforated-fill link"></i>
      </div>
    );
  };
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {props.items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="caption">
              <h3>{item.title}</h3>
              {props.isNeedButton && renderButton(item.id, props.url)}
            </div>
            <img src={item.src} alt={item.title}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
