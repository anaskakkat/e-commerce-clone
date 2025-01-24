/* eslint-disable react/prop-types */
import { IoAdd } from "react-icons/io5";

const ProductCard = ({ image, category, name, price }) => {
  return (
    <div className="  bg-white cursor-pointer w-56 h-63 rounded-lg  active:scale-110 transition ease duration-150 ">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-58 object-cover rounded-md"
        />
        {/* Category Badge */}
        <div className="absolute bottom-2 left-2 bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded-md">
          {category}
        </div>
        {/* Add Button */}
        <button className="absolute top-2 right-2 bg-white text-black rounded-full p-2  ">
          <IoAdd />
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-2 flex justify-between">
        <h2 className="text-sm font-light text-gray-800">{name}</h2>
        <p className="text-md font-semibold text-gray-900 ">{price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
