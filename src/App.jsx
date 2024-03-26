import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/icon-fonts/Icon.css";
import "./assets/fonts/stylesheet.css";
import axios from "axios";

// --------components------

import Headers from "./components/Headers";
import Main from "./components/Main";

// ---------IMG---------
import imgLogo from "./assets/img/logo-teal.svg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPanierActive, setIsPanierActive] = useState(null);
  // const [meals, setMeals] = useState(data.categories);
  const [counters, setCounters] = useState([0]);
  // console.log(setMeals);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--tvp4vjmpy6zn.code.run/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Headers
        imgLogo={imgLogo}
        restaurantName={data.restaurant.name}
        descriptionRestaurant={data.restaurant.description}
        imgPicture={data.restaurant.picture}
      />
      {!isPanierActive ? (
        <section>
          <button>Valider mon panier</button>
          <div>
            <p>Votre panier est vide</p>
          </div>
        </section>
      ) : (
        <section>
          <button>Valider mon panier</button>
          <div>
            <span className="icon-minus"></span>
            <span>count</span>
            <span className="icon-plus"></span>
            <span>name</span>
            <span>price</span>
          </div>
          <div>
            <span>Sous-total</span>
            <span>25,00 €</span>
          </div>
          <div>
            <span>Frais de livraison</span>
            <span>2,50 €</span>
          </div>
          <div>
            <span>Total</span>
            <span>27 €</span>
          </div>
        </section>
      )}

      {data.categories.map((elem) => {
        // console.log(elem.name);
        return (
          <Main
            setIsPanierActive={setIsPanierActive}
            elem={elem}
            key={elem.name}
            mealsName={elem.name}
          />
        );
      })}
    </>
  );
}

export default App;
