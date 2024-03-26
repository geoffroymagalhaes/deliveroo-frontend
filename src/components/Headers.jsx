const Headers = ({
  imgLogo,
  restaurantName,
  descriptionRestaurant,
  imgPicture,
}) => {
  return (
    <header>
      <section className=" firstHeader">
        <div className="container">
          <img src={imgLogo} alt="" />
        </div>
      </section>
      <section className="container secondHeader">
        <div>
          <h2>{restaurantName}</h2>
          <h3>{descriptionRestaurant}</h3>
        </div>
        <div className="img1">
          <img src={imgPicture} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Headers;
