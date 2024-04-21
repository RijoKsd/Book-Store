function Cards({ book }) {
  return (
    <>
      <div className=" card lg:w-96 bg-base-100 shadow-sm   mt-10 mx-2 md:my-3 dark:bg-slate-900 dark:text-white dark:border dark:border-white  ">
        <figure>
          <img
            src={book.image}
            alt={book.name}
            className=" hover:scale-105 transition-all duration-300"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {book.name}
            <div className="badge badge-secondary">{book.category}</div>
          </h2>
          <p> {book.title}</p>
          <div className="card-actions  justify-between">
            <div className="badge badge-outline p-3">${book.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 duration-200 cursor-pointer hover:text-white p-3">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
