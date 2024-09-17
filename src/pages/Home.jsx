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
          {/* <h1
            className="text-center text-cyan-700 font-bold p-4 rounded-full shadow-lg mb-8 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Rick et Morty
          </h1> */}

          {/* Titre Rick et Morty avec effet 3D */}
          <div className="flex justify-center items-center">
            <div className="text-8xl font-bold relative text-cyan-700 animate-swing">
              <span className="relative inline-block">
                {/* Effet d'ombre bleue sur chaque lettre */}
                <span className="relative z-10">R</span>
                <span className="relative z-10">I</span>
                <span className="relative z-10">C</span>
                <span className="relative z-10">K</span>
                <span className="relative z-10"> </span>
                <span className="relative z-10">E</span>
                <span className="relative z-10">T</span>
                <span className="relative z-10"> </span>
                <span className="relative z-10">M</span>
                <span className="relative z-10">O</span>
                <span className="relative z-10">R</span>
                <span className="relative z-10">T</span>
                <span className="relative z-10">Y</span>
                {/* Ombre bleue décalée */}
                {/* <span className="absolute inset-0 transform translate-x-6 translate-y-6 blur-sm">
                  RICK ET MORTY
                </span> */}

                {/* Ombres multiples pour effet 3D */}
                <span className="absolute inset-0 transform text-teal-700 translate-x-2 translate-y-2 blur-sm opacity-75">
                  RICK ET MORTY
                </span>
                <span className="absolute inset-0 transform text-cyan-700 translate-x-4 translate-y-4 blur-sm opacity-50">
                  RICK ET MORTY
                </span>
                <span className="absolute inset-0 transform text-yellow-300 translate-x-6 translate-y-6 blur-lg opacity-30">
                  RICK ET MORTY
                </span>
              </span>
            </div>
          </div>

          <FilterBar />
          <Grids />
        </main>
      </CharactersContext.Provider>
    </>
  );
}

export default Home;
