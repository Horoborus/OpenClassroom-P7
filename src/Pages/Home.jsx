import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Banner from "../Components/Banner.jsx";
import Footer from "../Components/Footer.jsx";
import Card from "../Components/Card.jsx";
import bannerImage from "../Assets/BackgroundHome.jpg";
import { Link } from "react-router-dom";
import Wrapper from "../Components/Wrapper.jsx";

const HomePage = () => {
  const bannerTitle = "Chez vous, partout et ailleurs";
  const [logements, setLogements] = useState([]);

  // La fonction de rappel du useEffect s'exécute après le rendu du composant
  useEffect(() => {
    // Récupère le fichier JSON
    fetch("./Data/logements.json")
      // Analyse la réponse en tant que JSON
      .then((response) => response.json())
      // Une fois les données récupérées et analysées, elles sont définies dans la variable d'état
      .then((data) => {
        setLogements(data);
        console.log(data); // Affiche les données récupérées dans la console
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Navbar />
        <Banner image={bannerImage} title={bannerTitle} />
        <div className="card">
          <div className="card__background">
            {logements.map((logement) => (
              <Link
                to={`/logement/${logement.id}`}
                className="card__contain"
                key={logement.id}
              >
                <Card title={logement.title} ImageUrl={logement.cover} />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HomePage;
