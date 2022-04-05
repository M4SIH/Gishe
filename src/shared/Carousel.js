import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import Button from "./Button";

const Carousel = (props) => {
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
              {props.isNeedButton && (
                <div className="buttons">
                  <Button
                    url={props.url}
                    id={item.id}
                    text={"More Info"}
                    buttonId={"carouselButton"}
                  />
                  <Button
                    url={props.url}
                    id={item.id}
                    text={"Buy Ticket"}
                    buttonId={"carouselButton"}
                    icon={true}
                  />
                </div>
              )}
            </div>
            <img src={item.src} alt={item.title}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
