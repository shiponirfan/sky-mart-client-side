import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";
const MarqueeSlider = () => {
  return (
    <div className="bg-job-primary text-white text-3xl font-bold">
      <Marquee>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Hot Picks of the Day!</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Flash Sales, Limited Time!</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Exclusive Offers Await You!</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">New Arrivals, Fresh Styles!</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Best Sellers – Grab Yours!</span>
        <span className="mx-5"><FaStarOfLife/></span>
        <span className="mx-5">Members-Only Discounts!</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
