import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import breadcrumbImg from "../../assets/images/breadcrumb.jpg";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import ProductsCard from "./ProductsCard";
import axios from "axios";

const Products = () => {
  const { homeSearchFiled } = useAuth();
  const [selectedHandleSort, setSelectedHandleSort] = useState("");
  const [searchfield, setSearchfield] = useState(homeSearchFiled);
  const {
    isLoading,
    refetch,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/products?title=${searchfield}&sort=${selectedHandleSort}`
      );
      return res.data;
    },
  });
  const handleSortValue = (e) => {
    e.preventDefault();
    setSelectedHandleSort(e.target.value);
  };

  useEffect(() => {
    refetch("products");
  }, [selectedHandleSort, searchfield, refetch]);

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <div>
      <ScrollToTopOnMount />
      <Helmet>
        <title>Products - Sky Mart</title>
      </Helmet>
      <Breadcrumbs
        image={breadcrumbImg}
        name={"Products"}
        breadCrumbs={
          <li>
            <span>{"Products"}</span>
          </li>
        }
      ></Breadcrumbs>

      <div className="dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8 pt-16 ">
          <div className="py-6 px-6 border border-job-primary rounded-lg  flex justify-between items-center flex-col-reverse md:flex-row-reverse gap-2 2xl:gap-8  dark:bg-gray-900 dark:text-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
              <h2 className="font-semibold xl:text-base 2xl:text-xl text-sm">
                Search:
              </h2>
              <div className="join">
                <div>
                  <div>
                    <input
                      defaultValue={homeSearchFiled ? homeSearchFiled : ""}
                      onBlur={(e) => setSearchfield(e.target.value)}
                      className="input w-28 md:w-36 lg:w-full input-bordered join-item focus:outline-0 dark:bg-gray-800 dark:border-gray-300"
                      placeholder="Product Name"
                    />
                  </div>
                </div>

                <div>
                  <button className="btn join-item bg-job-primary hover:bg-green-600 text-white dark:border-job-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 2xl:gap-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <h2 className="font-semibold xl:text-base 2xl:text-xl text-sm">
                  Sort By Price:
                </h2>
                <div className="w-52">
                  <select
                    onChange={handleSortValue}
                    className="select border-job-primary w-full select-bordered join-item focus:outline-0 dark:bg-gray-900 dark:border-gray-600"
                  >
                    <option value="">Sort By Price</option>
                    <option value="-1">High To Low</option>
                    <option value="1">Low To High</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold xl:text-base 2xl:text-xl text-sm">All Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {products?.result?.length > 0 ? (
                <>
                  <div data-aos="fade-up" data-aos-delay="100" className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {products?.result?.map((product) => (
                      <ProductsCard  key={product._id} product={product}></ProductsCard>
                    ))}
                  </div>
                </>
              ) : (
                <div className=" space-y-3 text-center px-6 lg:px-8 dark:text-white py-20 dark:bg-gray-800">
                  <h2 className="font-bold text-6xl text-job-primary">Oops!</h2>
                  <h2 className="text-xl font-bold">
                    It seems there is no data available at the moment.
                  </h2>
                  <h3 className="text-lg font-medium">
                    {" "}
                    Please check back later or try a different search.
                  </h3>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
