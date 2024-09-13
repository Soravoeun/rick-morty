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
          <FilterBar />
          <Grids />
        </main>
      </CharactersContext.Provider>
    </>
  );
}

export default Home;
