function ResCard(props) {
  //console.log(props);
  //   const resName = props.resData.name;
  //   const cuisine = props.resData.cuisine;
  //   const resRating = props.resData.rating;
  //   const priceForTwo = props.resData.priceForTwo;
  //   const deliveryTime = props.resData.deliveryTime;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = props.resData?.info;

  //console.log(props.resData?.info.sla.deliveryTime);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
}

export default ResCard;
