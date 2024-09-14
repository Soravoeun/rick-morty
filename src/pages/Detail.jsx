import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const singleCharacter = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(singleCharacter)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setEpisodes(data.episode);
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
            <p className="text-dark dark:text-white">{character.species}</p>
            <p className="mb-3 text-dark dark:text-white">{character.status}</p>

            {/* <ul className="mb-3 text-white dark:text-white">
              <h3 className="font-bold">Episodes:</h3>
              <Link className="mb-2">{character.episode}.split("/").pop()</Link>
            </ul> */}
            <ul className="mb-3 text-white dark:text-white">
              <h3 className="font-bold">Episodes:</h3>

              {/* ?. syntaxe js pour vérifier si "character.episode" existe avant d'essayer
              de parcourir la liste, pour éviter des erreurs si la valeur est
              undefined ou null. */}
              {character.episode?.map((episodeUrl, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={episodeUrl}
                    className="text-blue-400 underline hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Episode {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
