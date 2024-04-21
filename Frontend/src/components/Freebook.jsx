//  slick slide external css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
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
          dots: false,
          arrows:false
          
        },
      
      },
    ],
  };
  const freeBooks = list.filter((book) => book.category === "Free");

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
              {freeBooks.map((book) => (
                <Cards book={book} key={book.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
