import {
  BsPeopleFill,
  BsFillCalendarDateFill,
  BsFillCalendar2WeekFill,
} from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(https://i.ibb.co/02Hqvc9/Team-Building-Workshops.jpg)'}}>
      <div className="hero-overlay bg-opacity-80 py-12 text-white">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4">
          <div className=" text-center mb-10 lg:mb-0">
            <BsPeopleFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">200+</h5>
            <p className="text-xl font-medium">Satisfied Customers</p>
          </div>
          <div className=" text-center mb-10 lg:mb-0">
            <BsFillCalendar2WeekFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">400+</h5>
            <p className="text-xl font-medium">Product Added</p>
          </div>
          <div className=" text-center mb-10 lg:mb-0">
            <BsFillCalendarDateFill className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">130+</h5>
            <p className="text-xl font-medium">New Product</p>
          </div>
          <div className=" text-center">
            <FaPeopleGroup className="mx-auto text-5xl" />
            <h5 className="my-2 text-6xl font-bold">1900+</h5>
            <p className="text-xl font-medium">Participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
