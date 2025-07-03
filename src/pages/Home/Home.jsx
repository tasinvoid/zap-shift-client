import React from "react";
import Banner from "./Banner/Banner";
import ServiceCardContainer from "./Services/ServiceCardContainer";
import LogosMarquee from "./ClientLogosMarquee/LogosMarquee";
import Benefits from "./Benefits/Benefits";
import Comments from "./Commnets/Comments";
import BeMerchant from "./BeMerchant/BeMerchant";

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <ServiceCardContainer></ServiceCardContainer>
      <LogosMarquee
        direction="right"
        speed={60}
        gradient={false}
        pauseOnHover={false}
      />
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
      <Comments></Comments>
    </div>
  );
};

export default Home;
