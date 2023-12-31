import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import BrandsCard from "../../components/BrandsCard/BrandsCard";
import Accordions from "../../components/Accordions/Accordions";
import ContactUs from "../../components/ContactUs/ContactUs";
import { Helmet } from "react-helmet-async";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <Helmet>
            <title>Shopify | Home</title>
        </Helmet>
      <div>
        <Banner></Banner>
      </div>

      <h1  data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-center mb-10 mt-12">
        Available brands
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 w-[98%] mx-auto hover:cursor-pointer">
        {brands?.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div className="mb-8">
        <Accordions></Accordions>
      </div> 
      <div className="">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
