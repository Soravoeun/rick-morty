import React, { useContext, useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import { CharactersContext } from "../pages/Home";

function FilterBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { status } = useParams();
  const { characters, setCharacters } = useContext(CharactersContext);
  const { currentPage, setCurrentPage } = useContext(CharactersContext);
  const { charactersPerPage, getPageNumber } = useContext(CharactersContext);
  const { nbPages, setNbPages } = useContext(CharactersContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const urlLink = `https://rickandmortyapi.com/api/character?name=${searchTerm}`;

    fetch(urlLink)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        console.log(data.results);
        setNbPages(getPageNumber(data.results));
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleClearSearch = () => {
    setSearchTerm("");
    // Réinitialiser les résultats lorsque la recherche est effacée
    setCharacters([]);
  };

  return (
    <nav className="border-gray-200 p-2">
      <div className="flex items-center justify-between mx-3">
        {/* Left Section with Alive, Dead, and Unknown buttons */}
        <div className="flex space-x-4">
          <Link to={status === "alive" ? "/" : "/filter/alive"}>
            <button
              className={`${
                status === "alive" ? "bg-yellow-400" : "bg-cyan-600"
              } hover:bg-yellow-400 text-white px-4 py-2 rounded-lg`}
            >
              Alive
            </button>
          </Link>

          <Link to={status === "dead" ? "/" : "/filter/dead"}>
            <button
              className={`${
                status === "dead" ? "bg-pink-600" : "bg-cyan-600"
              } hover:bg-pink-600 text-white px-4 py-2 rounded-lg`}
            >
              Dead
            </button>
          </Link>

          <Link to={status === "unknown" ? "/" : "/filter/unknown"}>
            <button
              className={`${
                status === "unknown" ? "bg-green-800" : "bg-cyan-600"
              } hover:bg-green-800 text-white px-4 py-2 rounded-lg`}
            >
              Unknown
            </button>
          </Link>
        </div>

        {/* Right Section with Search bar and close button */}
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <ImSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="search-navbar"
              value={searchTerm}
              onChange={handleChange}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-green-900 focus:border-green-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-900 dark:focus:border-green-900"
              placeholder="Search..."
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400"
              >
                <IoClose />
              </button>
            )}
          </div>

          {/* Search Icon for Mobile View */}
          <button
            type="submit"
            onClick={handleSearch}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <ImSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
