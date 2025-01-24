import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Api from "../config/axiosConfig";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Api.get("/products");
        console.log("API Response:", response);

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <span className="loading loading-ring loading-lg"></span>

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold m-6">Home</h1>

        <input
          type="text"
          placeholder="Search a product"
          className="w-2/3 max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
      </div>

      <div className="container mx-auto px-26 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                category={product.category.name}
                name={product.title}
                price={product.price}
              />
            ))
          ) : (
            <p className="text-center">No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
