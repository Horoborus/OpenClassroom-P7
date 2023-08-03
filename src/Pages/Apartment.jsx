import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider"; // Assuming this component is implemented properly
import Error from "../Components/Error";
import "../Sass/Layout/Apartement.scss";
import Filters from "../Components/Filters";
import Ratings from "../Components/Ratings";
import Collapse from "../Components/Collapse";

const ApartmentPage = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Récupère le fichier JSON
    fetch("/Data/logements.json")
      .then((response) => response.json())
      .then((logements) => {
        const dataLogements = logements.find(
          (dataLogement) => dataLogement.id === id
        );
        setLogement(dataLogements);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      {logement.pictures && logement.pictures.length > 0 ? (
        <Slider images={logement.pictures} />
      ) : (
        <p>Images pas disponibles</p>
      )}
      <div className="apartement">
        <div className="apartement__container">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>

          <Filters tags={logement.tags} />
        </div>
        <Ratings
          name={logement.host.name}
          picture={logement.host.picture}
          rating={logement.rating}
        />
      </div>
      <div className="collapse__apartement">
        <Collapse title="Description" content={logement.description} />

        <Collapse title="Equipements" content={logement.equipments} />
      </div>
      <Footer />
    </>
  );
};

export default ApartmentPage;
