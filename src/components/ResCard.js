import { Link } from "react-router-dom";

import { CDN_URL } from "../utils/constants";

function ResCard(props) {

  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = props.resData?.info;

  return (
    <Link to={"/restaurants/" + id}>

      <div className="res-card">

        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />

        <h3>{name}</h3>

        <h4>{cuisines.join(", ")}</h4>

        <h4>{avgRating}</h4>

        <h4>{costForTwo}</h4>

        <h4>{sla?.deliveryTime} minutes</h4>

      </div>

    </Link>
  );
}

export default ResCard;