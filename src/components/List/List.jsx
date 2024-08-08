import { useContext, useEffect, useState } from "react";
import "./List.css";
import { v4 as uuidv4 } from "uuid";
import PageNumberContext from "../../contexts/PageNumberContext";
import PropTypes from "prop-types";
import LoadingContext from "../../contexts/LoadingContext";

List.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  arr: PropTypes.array.isRequired,
  setArr: PropTypes.func.isRequired,
};

export default function List({ type, children, arr, setArr }) {
  const [totalPages, setTotalPages] = useState(1);
  const {
    pageNumber,
    resetPageNumber,
    handlePreviousButtonClick,
    handleNextButtonClick,
  } = useContext(PageNumberContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://swapi.dev/api/${type}/?page=${pageNumber[type]}`, {
      signal,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then((data) => {
        const listWithId = data.results.map((item) => {
          return { ...item, id: uuidv4() };
        });
        setArr(listWithId);
        setTotalPages(Math.ceil(data.count / 10));
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
          alert(`Error. Could not retrieve ${type} info.`);
        }
      });

    return () => {
      controller.abort();
    };
  }, [pageNumber]);

  console.log(arr);

  function capitalizeFirstLetter(string) {
    if (!string) return string; // Handle empty or null strings gracefully
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="list-container">
      <h2
        className="list-container__section-title"
        onClick={() => resetPageNumber(type)}
      >
        {capitalizeFirstLetter(type)}
      </h2>
      {loading && <p className="list-container__text">...loading</p>}
      {!loading && <ul className="list-container__list">{children}</ul>}
      <p className="list-container__page-number">{`page ${pageNumber[type]}`}</p>
      <div className="list-container__buttons-container">
        {pageNumber[type] > 1 && (
          <button
            className="list-container__button list-container__button_type_prev"
            onClick={() => handlePreviousButtonClick(type)}
          >
            Previous
          </button>
        )}

        {pageNumber[type] < totalPages && (
          <button
            className="list-container__button list-container__button_type_next"
            onClick={() => handleNextButtonClick(type, totalPages)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
