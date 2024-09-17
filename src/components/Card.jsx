import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { id, image, name, species, status } = props;
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-center max-sm:px-18">
        <div className="w-full">
          <img
            src={image}
            alt="imageAlt"
            className="w-full  object-cover rounded-lg "
          />
        </div>
        <div className="p-2 flex flex-col">
          <h2 className="text-xl font-semibold text-left dark:text-white">
            {name}
          </h2>
          <p className=" text-gray-700 dark:text-gray-400">{species}</p>
          <p className=" text-gray-700 dark:text-gray-400">{status}</p>
          {/* <p className="mb-3 text-gray-700 dark:text-gray-400">{type}</p> */}
          <Link to={`/view/${id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
