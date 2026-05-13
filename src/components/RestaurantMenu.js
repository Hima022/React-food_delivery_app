import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

function RestaurantMenu() {

  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    try {

      const data = await fetch(MENU_API + id);

      const json = await data.json();

      console.log(json);

      setResInfo(json?.data);

    } catch (error) {

      console.log("ERROR FETCHING MENU", error);
    }
  };

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }

  const restaurantInfo =
    resInfo?.cards?.[2]?.card?.card?.info;

  return (
    <div className="menu">

      <h1>{restaurantInfo?.name}</h1>

      <h2>
        {restaurantInfo?.cuisines?.join(", ")}
      </h2>

      <h3>
        {restaurantInfo?.costForTwoMessage}
      </h3>

      <h3>
        {restaurantInfo?.avgRating} ⭐
      </h3>

      <h3>
        {restaurantInfo?.sla?.slaString}
      </h3>

      <h3>
        {restaurantInfo?.city}
      </h3>

    </div>
  );
}

export default RestaurantMenu;