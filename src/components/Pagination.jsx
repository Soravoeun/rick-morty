import React, { useContext } from "react";
import { CharactersContext } from "../pages/Home";

function Pagination() {
  const { characters, setCharacters } = useContext(CharactersContext);
  const { currentPage, setCurrentPage } = useContext(CharactersContext);
  const { charactersPerPage } = useContext(CharactersContext);
  const { nbPages, setNbPages } = useContext(CharactersContext);

  // Fonction pour changer la page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex gap-2">
          {/* Bouton Précédent */}
          <li>
            <button
              className=" px-3 py-2 rounded-md bg-cyan-600 hover:bg-cyan-400 text-white"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {/* Numéros de page */}
          {Array.from({ length: nbPages }, (_, index) => (
            <li key={index} className="page-item">
              <button
                className={`${
                  currentPage === index + 1 ? "bg-yellow-400" : "bg-cyan-600"
                } hover:bg-yellow-400 text-white px-4 py-2 rounded-lg`}
                // className="px-3 py-2 rounded-md bg-gray-500 hover:bg-gray-700 text-white"
                onClick={() => paginate(index + 1)}
                aria-current={currentPage === index + 1 ? "page" : "false"}
              >
                {index + 1}
              </button>
            </li>
          ))}
          {/* Bouton Suivant */}
          <li className="page-item">
            <button
              className="page-link px-3 py-2 rounded-md  bg-cyan-600 hover:bg-cyan-400 text-white"
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(characters.length / charactersPerPage)
              }
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pagination;
