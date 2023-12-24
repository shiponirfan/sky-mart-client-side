import { HiPencilSquare, HiSquare3Stack3D, HiUsers } from "react-icons/hi2";
import aboutSvg from "../../assets/icons/Catalogue-bro.png";
const AboutSection = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white py-10 xl:py-0">
      <div className="container mx-auto p-4 px-6 lg:px-8">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 xl:pl-20">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9 dark:text-white">
            About Sky Mart
            </h4>
            <ul className="mt-10">
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary rounded-md">
                      <HiSquare3Stack3D />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg dark:text-white font-bold leading-6 text-gray-900 ">
                    Curated Shopping Experience
                    </h5>
                    <p className="mt-2 dark:text-white text-base leading-6 text-gray-500 ">
                    Discover a handpicked selection tailored to your style, ensuring a personalized and enjoyable shopping journey at Sky Mart.                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary rounded-md">
                      <HiPencilSquare />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg dark:text-white font-bold leading-6 text-gray-900 ">
                    Swift Checkout Process
                    </h5>
                    <p className="mt-2 dark:text-white text-base leading-6 text-gray-500 ">
                    Streamline your purchase with our seamless checkout, making the shopping experience effortless and saving you valuable time.                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="400" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary  rounded-md">
                      <HiUsers />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg dark:text-white font-bold leading-6 text-gray-900 ">
                    Community-Driven Shopping
                    </h5>
                    <p className="mt-2 dark:text-white text-base leading-6 text-gray-500 ">
                    Join the Sky Mart community for collaborative shopping experiences. Share, explore, and engage with fellow shoppers, creating an inclusive and vibrant atmosphere for everyone.                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="">
            <img
              src={aboutSvg}
              alt="about illustration"
              className="w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
