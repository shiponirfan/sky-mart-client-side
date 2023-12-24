import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import AboutSection from "../../components/AboutSection/AboutSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sky Mart - Home</title>
      </Helmet>
      <HomeBanner />
      <WorkingProcess />
      <AboutSection />
      <CallToAction />
      <MarqueeSlider />
      <Testimonial />
    </div>
  );
};

export default Home;
