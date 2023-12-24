import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {
    _id,
    title,
    description,
    image,
    price,
    color_variations,
    size_variations,
  } = product;
  return (
    <div className="card bg-base-100 dark:bg-gray-900 shadow-xl">
      <figure>
        <img
          className="h-72 w-full object-cover"
          src={image[0]}
          alt="Product Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-bold">Price: {price}$</h2>
        <p>{description.slice(0, 80)}</p>
        <div className="flex items-center gap-1">
          <h2>Size:</h2>
          {size_variations?.map((size, index) => (
            <div key={index} className="badge badge-outline">
              {size.name}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <h2>Color:</h2>
          {color_variations?.map((color, index) => (
            <div key={index} className="badge badge-outline">
              {color.name}
            </div>
          ))}
        </div>
        <div className="card-actions">
          <button className="py-2 px-6 w-full rounded-lg font-medium hover:bg-green-600 duration-300 bg-job-primary text-white">
            <Link to={`/product/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.object,
};

export default ProductsCard;
