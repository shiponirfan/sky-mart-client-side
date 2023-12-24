import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Select from "react-select";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
const ProductDetails = () => {
    const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const { isLoading, data: product } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get(`https://sky-mart-server-side.vercel.app/api/v1/product/${id}`);
      return res.data;
    },
  });

  const { mutate: addToCart } = useMutation({
    mutationKey: ["addToCart", user?.email],
    mutationFn: async (cartData) => {
      return await axios.post("https://sky-mart-server-side.vercel.app/api/v1/cart", cartData);
    },
    onSuccess: () => {
      toast.success("Added To Cart Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/cart');
    },
  });

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const sizeOptions = product?.size_variations?.map((size) => ({
    value: size.name,
    label: size.name,
  }));

  const colorOptions = product?.color_variations?.map((color) => ({
    value: color.name,
    label: color.name,
  }));

  const quantityOptions = Array.from({ length: 10 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}`,
  }));

  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption ? selectedOption.value : null);
  };

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption ? selectedOption.value : null);
  };

  const handleQuantityChange = (selectedOption) => {
    setSelectedQuantity(selectedOption ? selectedOption.value : 1);
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const selectedProduct = {
        title: product.title,
        image: product.image,
        price: product.price,
        userEmail: user?.email,
        selectedSize,
        selectedColor,
        selectedQuantity,
      };
      addToCart(selectedProduct);
    } else {
      toast.warn("Please select size and color before adding to cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { title, description, image, price } = product;

  const images = [
    { original: image[0], thumbnail: image[0] },
    { original: image[1], thumbnail: image[1] },
    { original: image[2], thumbnail: image[2] },
    { original: image[3], thumbnail: image[3] },
  ];

  return (
    <div>
      <Helmet>
        <title>{title} - Sky Mart</title>
      </Helmet>
      <Breadcrumbs
        image={image[0]}
        name={title}
        breadCrumbs={
          <li>
            <span>{"Product Details"}</span>
          </li>
        }
      ></Breadcrumbs>
      <div className="flex flex-col lg:flex-row dark:bg-gray-800 dark:text-white justify-between container mx-auto xl:py28 lg:py-20 py-10 lg:px-8 px-6 gap-8">
        <div className="lg:w-1/2 w-full">
          <ImageGallery showNav={false} showPlayButton={false} items={images} />
        </div>
        <div className="lg:w-1/2 w-full space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <h2 className="font-bold text-2xl">Price: {price}$</h2>
          <p>
            Welcome to Sky Mart, your one-stop destination for premium fashion
            accessories. Elevate your style with our Elegant Leather Handbag – a
            perfect blend of sophistication and practicality.
          </p>
          <p>{description}</p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-bold">Size:</h2>
              <Select
              className="dark:text-black"
                options={sizeOptions}
                value={
                  selectedSize
                    ? { label: selectedSize, value: selectedSize }
                    : null
                }
                onChange={handleSizeChange}
              />
            </div>
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-bold">Color:</h2>
              <Select
              className="dark:text-black"
                options={colorOptions}
                value={
                  selectedColor
                    ? { label: selectedColor, value: selectedColor }
                    : null
                }
                onChange={handleColorChange}
              />
            </div>
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-bold">Quantity:</h2>
              <Select
              className="dark:text-black"
                options={quantityOptions}
                value={
                  selectedQuantity
                    ? {
                        label: selectedQuantity.toString(),
                        value: selectedQuantity,
                      }
                    : null
                }
                onChange={handleQuantityChange}
              />
            </div>
          </div>

          <button
            className="py-4 text-xl font-bold px-6 w-full rounded-lg  hover:bg-green-600 flex items-center gap-2 justify-center duration-300 bg-job-primary text-white"
            onClick={handleAddToCart}
          >
            <FaCartShopping /> Add to Cart
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 dark:bg-gray-800 dark:text-white justify-between container mx-auto xl:py28 lg:py-20 py-10 lg:px-8 px-6 gap-8">
        <div className="space-y-3">
          <h2 className="font-bold text-2xl">Why Choose Sky Mart?</h2>
          <p>
            At Sky Mart, we prioritize quality, style, and customer
            satisfaction. Our Elegant Leather Handbag is a testament to our
            commitment to providing you with fashion-forward accessories that
            stand the test of time.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-2xl">Perfect for Every Occasion:</h2>
          <p>
            Whether you&apos;re heading to the office, a social event, or a
            weekend getaway, the Elegant Leather Handbag from Sky Mart adds a
            touch of sophistication to your ensemble.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-2xl">Order Yours Today:</h2>
          <p>
            Transform your look and make a statement with the Elegant Leather
            Handbag from Sky Mart. Order now and experience the perfect blend of
            style and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
