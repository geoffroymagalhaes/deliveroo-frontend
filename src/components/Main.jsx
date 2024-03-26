const Main = ({ mealsName, elem, setIsPanierActive }) => {
  // console.log(mealsName);
  const ReducingText = (text) => {
    if (text.length > 57) {
      return text.substring(0, 57) + "...";
    } else {
      return text;
    }
  };
  return (
    <>
      <main className="container">
        {elem.meals.length === 0 ? "" : <h4>{mealsName}</h4>}
        <section className="mainLeft">
          {elem.meals.map((elem) => {
            return (
              <>
                <section
                  onClick={() => {
                    setIsPanierActive(true);
                  }}
                  className="restaurantContainer"
                >
                  <div>
                    <div>
                      <h5>{elem.title}</h5>
                      <p>{ReducingText(elem.description)}</p>
                      <span className="price">{elem.price} €</span>

                      {elem.popular === true && (
                        <span className="populaire icon-STAR_FILL">
                          {" "}
                          Populaire{" "}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    {elem.picture ? <img src={elem.picture} alt="allo" /> : ""}
                  </div>
                </section>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
};
export default Main;
