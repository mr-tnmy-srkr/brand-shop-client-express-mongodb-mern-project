import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Slider from "../../components/Slider/Slider";
import { Helmet } from "react-helmet-async";

const BrandProduct = () => {
  const products = useLoaderData();

  // console.log(products);

  return (
    <>
    <div className="">
    <Helmet>
            <title>Shopify | Product</title>
        </Helmet>
      <Slider></Slider>
    </div>
      <div
        className={`${
          products.length ? "grid md:grid-cols-2 gap-10" : ""
        }  py-16 dark:bg-gray-600 dark:text-gray-100`}
      >
        {products.length ? (
          products?.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))
        ) : (
            <div className=" text-center min-h-[50vh] flex items-center justify-center text-2xl font-medium">
          <p >{` Sorry! You did't add any products`}
          <br />
          <Link to={"/addProduct"}><button className="btn  bg-[#95BF46] capitalize text-white mt-4 border-0">Add Product</button></Link> </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BrandProduct;
