import PropTypes from "prop-types";
import { BsFillTrashFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
const MyCartCard = ({ cartItem, refetch }) => {
  const {
    _id,
    title,
    price,
    image,
    selectedSize,
    selectedColor,
    selectedQuantity,
  } = cartItem;
  const { user } = useAuth();
  const { mutate: setRemove } = useMutation({
    mutationKey: ["setRemove", user?.email],
    mutationFn: async (removeData) => {
      return await axios.delete(
        `https://sky-mart-server-side.vercel.app/api/v1/cart/${removeData}`
      );
    },
    onSuccess: () => {
      toast.success("Remove Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch();
    },
  });
  const handleRemove = () => {
    setRemove(_id);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 mb-4 md:items-center rounded-lg shadow-lg dark:shadow-gray-950 border border-transparent dark:border justify-between dark:border-yellow-400 hover:shadow-brand-primary/50 duration-300 text-base xl:text-lg"
    >
      <div className="xl:w-64 md:w-40  h-56 md:h-32">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={image[0]}
          alt={title}
        />
      </div>
      <div className="space-y-1">
        <h2 className="font-bold dark:text-yellow-400 text-brand-primary text-xl xl:text-2xl font-rajdhani">
          {title}
        </h2>
        <h2>
          Size:{" "}
          <span className="font-bold badge badge-outline">{selectedSize}</span>
        </h2>
        <h2>
          Color:{" "}
          <span className="font-bold badge badge-outline">{selectedColor}</span>
        </h2>
      </div>
      <div className="space-y-1 ">
        <h3 className="xl:text-xl">
          Price: <span className="font-bold">${price}</span>
        </h3>
        <span className="flex items-center gap-2">
          Quantity:{" "}
          <span className="font-bold badge badge-outline">
            {selectedQuantity}
          </span>
        </span>
      </div>
      <div className="justify-end">
        <button
          onClick={handleRemove}
          className="bg-job-primary dark:hover:bg-yellow-400 dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-3 xl:px-6 px-3 rounded-md flex justify-center items-center"
        >
          <BsFillTrashFill className="mr-1" /> Remove
        </button>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  cartItem: PropTypes.object,
  refetch: PropTypes.node,
};

export default MyCartCard;
