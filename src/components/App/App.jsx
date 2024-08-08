import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNumberContext from "../../contexts/PageNumberContext";
import LoadingContext from "../../contexts/LoadingContext";

function App() {
  const [pageNumber, setPageNumber] = useState(
    JSON.parse(localStorage.getItem("pageNumber")) || {
      films: 1,
      people: 1,
      planets: 1,
      species: 1,
      starships: 1,
      vehicles: 1,
    }
  );
  const [loading, setLoading] = useState(true);

  function handlePreviousButtonClick(section) {
    if (pageNumber[section] > 1) {
      setPageNumber((prev) => {
        return { ...prev, [section]: prev[section] - 1 };
      });
    }
  }

  function handleNextButtonClick(section, total) {
    if (pageNumber[section] < total) {
      setPageNumber((prev) => {
        return { ...prev, [section]: prev[section] + 1 };
      });
    }
  }

  function resetPageNumber(type) {
    if (pageNumber[type] !== 1) {
      setPageNumber((prev) => {
        return { ...prev, [type]: 1 };
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("pageNumber", JSON.stringify(pageNumber));
  }, [pageNumber]);

  console.log(pageNumber);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <PageNumberContext.Provider
        value={{
          pageNumber,
          resetPageNumber,
          handlePreviousButtonClick,
          handleNextButtonClick,
        }}
      >
        <div className="page">
          <div className="page__content">
            <Header />
            <Main />
          </div>
          <Footer />
        </div>
      </PageNumberContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
