//  slick slide external css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: false,
          // arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20   px-4 mt-10  py-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
          <p>
            Books transport us to magical realms, unravel mysteries, and
            inspire. They &apos; re gateways to knowledge, imagination, and
            endless adventures. 📚✨{" "}
          </p>
        </div>

        {/* slider */}
        <div>
          <div className="slider-container md:mt-14">
            <Slider {...settings}>
              {book && book.length > 0 ? (
                book.map((book) => <Cards book={book} key={book.id} />)
              ) : (
                <h1 className="text-3xl md:text-5xl  col-span-3 text-center bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text mt-3" >
                  {" "}
                  No books available
                </h1>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
