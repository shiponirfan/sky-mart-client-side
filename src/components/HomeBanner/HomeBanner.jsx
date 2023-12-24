import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import marketImg from "../../assets/icons/marketplace.png";
const HomeBanner = () => {
  const { setHomeSearchFiled, setHomeSearchJobTypes } = useAuth();
  const navigate = useNavigate();
  const handleHomeSearchBtn = (e) => {
    e.preventDefault();
    const homeSearch = e.target.homeSearch.value;
    const homeSearchJobTypes = e.target.homeSearchJobTypes.value;
    setHomeSearchFiled(homeSearch);
    setHomeSearchJobTypes(homeSearchJobTypes);
    navigate("/products");
  };

  return (
    <div className="lg:py-28 md:py-20 py-14 bg-job-secondary dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8 flex md:flex-row flex-col justify-between items-center md:gap-4 gap-2">
        <div className="space-y-4 md:w-1/2">
          <h3 className="font-medium text-job-primary">
            We Have 207,000+ Active Products
          </h3>
          <h2 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
            Your Gateway to{" "}
            <span className="text-job-primary">Elevated Shopping</span>
          </h2>
          <p className="font-medium text-job-primary">
            Type your product name, then click search to find product.
          </p>

          <form onSubmit={handleHomeSearchBtn}>
            <div className="join">
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
              <div className="overflow-hidden inline-block pt-11 lg:pt-0">
                <img
                  src={marketImg}
                  alt="hero "
                  className="max-w-full h-full object-contain lg:ml-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
