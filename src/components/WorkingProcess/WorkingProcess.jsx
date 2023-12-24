import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
const WorkingProcess = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container  mx-auto xl:pt-28 lg:pt-20 pt-10 px-6 lg:px-8 text-center space-y-2">
        <h3
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-xl text-job-primary font-semibold "
        >
          Working Process
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl font-bold "
        >
          How Sky Mart Works For You
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 pt-10 lg:pt-20"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-full dark:bg-gray-800  group h-full py-8 text-center  hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl "
          >
            <div className="flex flex-col dark:text-white justify-center items-center h-full">
              <AiOutlineFileSearch className="text-7xl dark:text-white group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl dark:text-white font-bold group-hover:text-white duration-300  text-gray-900 ">
                Browse Bliss
              </p>
              <p className="px-6 py-2 dark:text-white text-gray-700 group-hover:text-white duration-300 ">
                Discover a curated collection effortlessly.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full dark:bg-gray-800 group h-full py-8 text-center hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl "
          >
            <div className="flex flex-col justify-center items-center h-full">
              <BsBuildings className="text-7xl dark:text-white group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold- dark:text-white group-hover:text-white duration-300 text-gray-900 ">
                Swift Checkout
              </p>
              <p className="px-6 py-2 text-gray-700 dark:text-white group-hover:text-white duration-300 ">
                Seamless transactions for your convenience.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-full dark:bg-gray-800 group h-full py-8 text-center  hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl "
          >
            <div className="flex flex-col justify-center items-center h-full">
              <LiaFunnelDollarSolid className="text-7xl dark:text-white group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl dark:text-white font-bold group-hover:text-white duration-300 text-gray-900 ">
                Instant Delivery
              </p>
              <p className="px-6 py-2 text-gray-700 dark:text-white group-hover:text-white duration-300 ">
              From cart to doorstep in a blink.</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full dark:bg-gray-800 group h-full py-8 text-center hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl "
          >
            <div className="flex flex-col justify-center items-center h-full">
              <HiOutlineDocumentText className="text-7xl dark:text-white group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 dark:text-white text-2xl font-bold group-hover:text-white duration-300 text-gray-900 ">
              24/7 Support</p>
              <p className="px-6 dark:text-white py-2 text-gray-700 group-hover:text-white duration-300 ">
              Reliable assistance, whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
