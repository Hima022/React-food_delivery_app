import { useEffect, useState } from "react";

import ResCard from "./ResCard";
import { SWIGGY_API_URL } from "../utils/constants";

import Shimmer from "./Shimmer";

function Body() {

  const [searchText, setSearchText] = useState("");

  const [resArray, setResArray] = useState([]);

  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch(SWIGGY_API_URL);

    const jsonObj = await data.json();

    console.log(jsonObj);

    const restaurants =
      jsonObj?.data?.cards
        ?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
        )
        ?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setResArray(restaurants);

    setFilteredArray(restaurants);
  };

  if (resArray.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="filter">

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {

            const filtered = resArray.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredArray(filtered);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {

            const filtered = resArray.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredArray(filtered);
          }}
        >
          Top Rated
        </button>

      </div>

      <div className="res-container">

        {filteredArray.map((restaurant) => (
          <ResCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}

      </div>
    </>
  );
}

export default Body;