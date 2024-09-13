import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const singleCharacter = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(singleCharacter)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);
  return (
    <div className=" p-4">
      <div>
        <Link
          to="/"
          className="underline text-blue-500 hover:text-blue-700 block mb-4"
        >
          Retour
        </Link>

        <div className=" flex flex-col items-center dark:bg-gray-800 dark:border-gray-700  w-full bg-cyan-700">
          <div className="max-w-80 mx-auto  dark:bg-gray-800 dark:border-gray-700 p-4">
            <img
              src={character.image}
              alt={character.name}
              className="w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="text-left p-4 w-1/2">
            <h2 className="text-xl  font-semibold mb-2 text-white dark:text-white">
              {character.name}
            </h2>
            <p className="text-white dark:text-white">{character.species}</p>
            <p className="mb-3 text-white dark:text-white">
              {character.status}
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              {/*Episodes: {character.episode.length} */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla qui aticie deserent sintit anie at est idart mon proident,
              sunt in culpa Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
