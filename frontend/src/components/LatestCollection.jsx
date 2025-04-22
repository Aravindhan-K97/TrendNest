import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);
  
  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        "Discover a seamless and enjoyable shopping experience with TrendNest, your one-stop destination for the latest fashion, electronics, home goods, and more. TrendNest offers a diverse selection of high-quality products, all easily accessible through a user-friendly interface. Enjoy secure payment options, fast delivery, personalized recommendations, exclusive deals, and hassle-free returns. Whether you're at home or on the go, TrendNest makes online shopping convenient, stylish, and fun. Shop today and find your next favorite item with just a few taps!"
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
