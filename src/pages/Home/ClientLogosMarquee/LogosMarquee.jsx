import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";
const myLogos = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 1" },
  { src: logo3, alt: "Logo 1" },
  { src: logo4, alt: "Logo 1" },
  { src: logo5, alt: "Logo 1" },
  { src: logo6, alt: "Logo 1" },
  { src: logo7, alt: "Logo 1" },
];

const LogosMarquee = ({
  direction = "left",
  speed = 50,
  gradient = false,
  pauseOnHover = true,
}) => {
  return (
    <div style={{ width: "80%", overflow: "hidden" ,}} className="my-20 mx-auto">
      <Marquee
        direction={direction}
        speed={speed}
        gradient={gradient}
        pauseOnHover={pauseOnHover}
      >
        {myLogos.map((logo, index) => (
          <div key={index} style={{ margin: "0 20px" }}>
            <img
              src={logo.src}
              alt={logo.alt || `Logo ${index + 1}`}
              // style={{
              //   height: "50px",
              //   maxWidth: "150px",
              //   objectFit: "contain",
              // }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogosMarquee;
