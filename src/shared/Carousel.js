import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {props.movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="caption">
              <h4>{movie.title}</h4>
              <div className="button" id="carouselButton">
                <div id="slide"></div>
                <Link className="link" to="/movie">
                  Buy Ticket
                </Link>
                <i className="bi bi-ticket-perforated-fill link"></i>
              </div>
            </div>
            <img src={movie.src} alt={movie.title}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
