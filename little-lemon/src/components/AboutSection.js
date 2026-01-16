import aboutImgFirst from "../images/restaurant-bg.jpg";
import aboutImgSecond from "../images/restaurant-chef.jpg";

const AboutSection = () => {
  return (
    <div id="About" className="about-container-wrapper">
      <div className="about-left-info">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className="about-featured-photos">
        <div
          className="about-first-photo bg-image"
          style={{ backgroundImage: `url(${aboutImgFirst})` }}
        ></div>
        <div
          className="about-second-photo bg-image"
          style={{ backgroundImage: `url(${aboutImgSecond})` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutSection;
