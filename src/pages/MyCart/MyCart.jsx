import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import MyCartCard from "./MyCartCard";
import { Helmet } from "react-helmet-async";
import breadcrumbImg from "../../assets/images/breadcrumb.jpg";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const MyCart = () => {
  const { user } = useAuth();
  const {
    isLoading,
    data: carts,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://sky-mart-server-side.vercel.app/api/v1/carts?user=${user?.email}`
      );
      return res.data;
    },
  });

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  const breadCrumbs = (
    <li>
      <span>My Cart</span>
    </li>
  );
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>My Cart | Sky Mart</title>
      </Helmet>
      {isLoading ? (
        <div className="absolute w-full bg-white dark:bg-gray-900 z-50 h-full flex justify-center items-center">
          <span className="loading loading-ring w-20 text-brand-primary dark:text-yellow-400"></span>
        </div>
      ) : (
        <div>
          <ScrollToTopOnMount />
          <Breadcrumbs
            image={breadcrumbImg}
            name={"My Cart"}
            breadCrumbs={breadCrumbs}
          ></Breadcrumbs>
          {carts.length > 0 ? (
            <div>
              <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 xl:py-24 ">
                <div className="w-full">
                  {carts.map((cartItem) => (
                    <MyCartCard
                      key={cartItem._id}
                      cartItem={cartItem}
                      cartItems={carts}
                      refetch={refetch}
                    ></MyCartCard>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="container mx-auto px-6 lg:px-8 text-center py-24">
              <h2 className="font-bold text-2xl md:text-5xl font-rajdhani text-brand-primary dark:text-yellow-400">
                No available cart item were found.
              </h2>
              <h4 className="font-medium md:text-3xl  my-2">
                If you wish, you can add a product to cart.
              </h4>
              <div className="flex gap-6 mt-4 justify-center">
                <Link to={"/products"}>
                  <button className="bg-job-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  md:text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Show Product
                  </button>
                </Link>
                <Link to="/">
                  <button className="bg-job-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  md:text-lg  py-3 px-6 rounded-md flex justify-center items-center">
                    Back To Home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCart;
