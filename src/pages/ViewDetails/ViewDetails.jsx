import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const [filteredItem, setFilteredItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const products = useLoaderData();
  const { id } = useParams();
  // console.log(products);

  const navigate = useNavigate();

  useEffect(() => {
    const filteredProduct = products.find((product) => product._id === id);
    // console.log(filteredProduct);
    setFilteredItem(filteredProduct);
    setLoading(false);
  }, [id, products]);

  // console.log(filteredItem);

  const { _id, brand, image, name, type, price, rating, description } =
    filteredItem || {};
  // console.log(parseFloat(rating));

  //Add to cart

  const handleAddToCart = (id) => {
    // console.log(id);
    const findProduct = products.find((item) => item._id === id);
    // console.log(findProduct);

    fetch(
      "https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/cartProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ findProduct }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            text: "Product adds to cart successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div data-aos="flip-down" className=" dark:bg-gray-500 dark:text-gray-100">
      <Helmet>
        <title>{`${brand}-${type}`}</title>
      </Helmet>
      {loading ? (
        ""
      ) : (
        <>
          <div className="pl-2 pt-5">
            <h1 className=" bg-green-500 max-w-max px-2 rounded-xl text-xl font-bold text-white py-1">
              Brand : {brand}
            </h1>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row items-center justify-center dark:bg-gray-500 dark:text-gray-100">
            <figure className="flex-1 mx-auto md:w-full">
              <img
                className="h-96 object-contain p-4"
                src={image}
                alt={`${name}`}
              />
            </figure>
            <div className="card-body flex-1">
              <div className="space-y-3">
                <h2 className="card-title text-4xl font-semibold">{name}</h2>
                <p className="text-xl">Type : {type}</p>
                <p className="text-2xl font-medium">Price : {price}</p>

                <div>
                  <StarRatings
                    rating={parseFloat(rating)}
                    starRatedColor="blue"
                    numberOfStars={6}
                    name="rating"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                  <span className="btn btn-sm bg-green-500 text-white ml-3 border-0">
                    {rating}
                    <span className="text-white">
                      <AiFillStar></AiFillStar>
                    </span>
                  </span>
                </div>
                <p className="text-lg">{description}</p>
              </div>
              <div className=" ">
                <div className="flex">
                  <button data-aos="flip-right"
                    onClick={() => navigate(-1)}
                    className="btn btn-info capitalize text-white mr-4"
                  >
                    Go Back
                  </button>
                  <button data-aos="flip-left"
                    onClick={() => handleAddToCart(_id)}
                    className="btn btn-primary capitalize text-white  bg-[#95BF46] border-none rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewDetails;
