import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import marketImg from "../../assets/icons/marketplace.png";

const HomeBanner = () => {
  const { theme, setHomeSearchFiled, setHomeSearchJobTypes } = useAuth();
  const navigate = useNavigate();
  const handleHomeSearchBtn = (e) => {
    e.preventDefault();
    const homeSearch = e.target.homeSearch.value;
    const homeSearchJobTypes = e.target.homeSearchJobTypes.value;
    setHomeSearchFiled(homeSearch);
    setHomeSearchJobTypes(homeSearchJobTypes);
    navigate('/all-jobs');

  };

  return (
    <div className="lg:py-28 md:py-20 py-14 bg-job-secondary dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8 flex md:flex-row flex-col justify-between items-center md:gap-4 gap-2">
        <div className="space-y-4 md:w-1/2">
          <h3 data-aos="fade-up" data-aos-delay="100"  className="font-medium text-job-primary">
            We Have 207,000+ Active Products
          </h3>
          <h2 data-aos="fade-up" data-aos-delay="200" className="font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
          Your Gateway to <span className="text-job-primary">Elevated Shopping</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="300"  className="font-medium text-job-primary">
            Type your product name, then click search to find product.
          </p>

          <form  onSubmit={handleHomeSearchBtn}>
            <div data-aos="fade-up" data-aos-delay="400" className="join">
              <div>
                <div>
                  <input
                    name="homeSearch"
                    className="input w-28 md:w-36 lg:w-full input-bordered join-item focus:outline-0 dark:bg-gray-800 dark:border-gray-300"
                    placeholder="Search"
                  />
                </div>
              </div>
              

              <div>
                <button className="btn join-item bg-job-primary hover:bg-green-600 text-white dark:border-job-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 ">
          <div className="w-full px-4 ">
            <div className="lg:ml-auto lg:text-right">
              <div  className="overflow-hidden inline-block pt-11 lg:pt-0">
                <img
                data-aos="fade-left" data-aos-delay="400"
                  src={marketImg}
                  alt="hero "
                  className="max-w-full h-full object-contain lg:ml-auto "
                />
                <div className="relative">
                  <span className="absolute -bottom-8 -left-8">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
