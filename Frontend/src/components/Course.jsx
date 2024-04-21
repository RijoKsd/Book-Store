import { Link } from "react-router-dom";

import list from "../../public/list.json"
import Cards from "./Cards";
 

const Course = () => {
      
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28   text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We &#39;re delighted to have you{" "}
            <span className="text-pink-500">Here!: &#41;</span>
          </h1>

          <p className="mt-12 text-[15px] md:text-base md:w-2/3 md:mx-auto">
            Books are an essential part of our lives. They provide us with
            knowledge, inspiration, and entertainment. Reading books helps us
            expand our horizons, broaden our perspectives, and develop critical
            thinking skills.
          </p>
          <Link to="/" className="btn btn-secondary mt-6">
            Back to home
          </Link>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-gid-cols-4 mt-14">
       
            {list.map((book) => (
              <Cards book={book} key={book.id}   />
            ))}
        
        </div>
      </div>
    </>
  );
};

export default Course;
