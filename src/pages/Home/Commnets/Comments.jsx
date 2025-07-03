import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import CommentCard from "./CommentCard";
const Comments = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["commentsData"],
    queryFn: () => fetch("/src/assets/comments.json").then((res) => res.json()),
  });
  if (isPending) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }
  data;

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-30"
    >
      {data.map((comment) => (
        <SwiperSlide>
          <CommentCard comment={comment}></CommentCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Comments;
