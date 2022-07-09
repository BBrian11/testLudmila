import { PageTitle } from "./../../pageTitle/PageTitle";
import "./globalSearch.css";

import React, { useState, useEffect } from "react";
import { firestore } from "../../../firebase";
import Card from "../../card/Card";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const GlobalSearch = () => {
  const [propieties, setPropieties] = useState([]);
  const query = useQuery();
  const filterSearch = {
    operation: query.get("operation"),
    type: query.get("type"),
    locations: query.get("location"),
  };

  useEffect(() => {
    firestore
      .collection("estates")
      .get()
      .then((e) => {
        e.docs.forEach((doc) => {
          setPropieties((sl) => [...sl, doc]);
        });
      });
  }, []);
  return (
    <div >
      <PageTitle title="Resultados de busqueda"></PageTitle>
      <div className="venta-list gs-div">
        {propieties[0] ? (
          propieties
            
            .filter(
              (d) => filterSearch.operation === "Seleccione tipo de operación" || d.data().comercialStatus === filterSearch.operation
            )
            .filter((d) => filterSearch.type === "Seleccione tipo de propiedad" || d.data().type === filterSearch.type)
          // .filter((d) => filterSearch.locations === "Cualquiera" || d.data().location.city === filterSearch.locations)
            .map((p, i) => <Card propiedad={p} key={i} />)
        ) : (
          <>
            <Card />
            <Card />
            <Card />
          </>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;
