import { Link } from "react-router-dom";

import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
        book && console.log(book, " == book");
      } catch (error) {
        console.log(error.message);
      }
    };
    getBook();
  }, []);

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
           
          {book && book.length > 0 ? (
          book.map((book) => <Cards book={book} key={book.id} />)
          ) : (
            <h1 className="text-3xl md:text-5xl  col-span-3 text-center bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text">
              {" "}
              No books available
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
