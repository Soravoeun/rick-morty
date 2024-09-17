import React, { createContext, useState } from "react";
import { ImSearch } from "react-icons/im";
import Grids from "../components/Grids";
import FilterBar from "../components/FilterBar";

export const CharactersContext = createContext(null);

function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);
  const [nbPages, setNbPages] = useState(1);

  function getPageNumber(characterData) {
    return Math.ceil(characterData.length / charactersPerPage);
  }

  return (
    <>
      <CharactersContext.Provider
        value={{
          characters,
          setCharacters,
          currentPage,
          setCurrentPage,
          getPageNumber,
          charactersPerPage,
          nbPages,
          setNbPages,
        }}
      >
        <main>
          <h1
            className="text-center text-cyan-700 font-bold p-4 rounded-full shadow-lg mb-8 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Rick et Morty
          </h1>
          <FilterBar />
          <Grids />
        </main>
      </CharactersContext.Provider>
    </>
  );
}

export default Home;
