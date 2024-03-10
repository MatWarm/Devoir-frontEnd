import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dataPublicApi, setDataPublicApi] = useState(null);
  const [data, setData] = useState(null);
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const urlLocal = "http://localhost:8080/test";

  useEffect(() => {
    // Appel à l'API locale
    fetch(urlLocal)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));

    // Appel à l'API externe
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataPublicApi(data);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, [urlLocal, url]); // Dépendances : URL locale et URL externe

  return (
    <div>
      {" "}
      {data ? (
        <div>
          <p> Resultat de l 'appel d' api privée: </p>{" "}
          <div className="scrollable-text">
            <pre> {JSON.stringify(data, null, 2)} </pre>{" "}
          </div>{" "}
        </div>
      ) : (
        <p> Chargement en cours... </p>
      )}{" "}
      {dataPublicApi ? (
        <div>
          <p> Resultat de l 'appel d' api Public: </p>{" "}
          <div className="scrollable-text">
            <pre> {JSON.stringify(dataPublicApi, null, 2)} </pre>{" "}
          </div>{" "}
        </div>
      ) : (
        <p> Chargement en cours... </p>
      )}{" "}
    </div>
  );
}

export default App;
