import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { CharactersContext } from "../pages/Home";

function Grids() {
  const { status } = useParams();
  // const [characters, setCharacters] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const { characters, setCharacters } = useContext(CharactersContext);
  const { currentPage, setCurrentPage } = useContext(CharactersContext);
  const { charactersPerPage, getPageNumber } = useContext(CharactersContext);
  const { nbPages, setNbPages } = useContext(CharactersContext);

  useEffect(() => {
    let urlLink = "https://rickandmortyapi.com/api/character";
    // si status = alive concatenaire url ? status=alive

    if (status === "alive") {
      urlLink += "?status=" + status;
    }

    if (status === "dead") {
      urlLink += "?status=" + status;
    }

    if (status === "unknown") {
      urlLink += "?status=" + status;
    }

    fetch(urlLink)
      .then((res) => res.json())
      .then((data) => {
        // Stockez les résultats dans l'état
        setCharacters(data.results);
        console.log(data.results);
        setNbPages(getPageNumber(data.results));
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [status]);

  console.log(
    characters.filter(
      (item, index) =>
        (currentPage - 1) * charactersPerPage < index + 1 &&
        index + 1 <= currentPage * charactersPerPage
    )
  );
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-24 w-full">
        {characters
          .filter(
            (item, index) =>
              (currentPage - 1) * charactersPerPage < index + 1 &&
              index + 1 <=
                (currentPage - 1) * charactersPerPage + charactersPerPage
          )
          .map((item, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg ">
              <Card {...item} />
            </div>
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Grids;
