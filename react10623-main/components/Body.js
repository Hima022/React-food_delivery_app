import { getResCardsInfo, SWIGGY_API_URL } from "../utils/constants";
import ResCard from "./ResCard";
import React from "react";
import React ,{ useEffect,useState } from "react";

function Body() {
  //var searchText = "";
  const [searchText, setSearchText] = useState("");
  //var resArray = getResCardsInfo();
  const [resArray, setResArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  
  const fetchData = async () => {
  const data = await fetch(SWIGGY_API_URL);

  const jsonObj = await data.json();

  console.log(jsonObj);
  // console.log(jsonObj);

  const restaurants =
    jsonObj?.data?.cards
      ?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setResArray(restaurants);
  setFilteredArray(restaurants);
};

  useEffect(() => {

    fetchData();
  }, []);
  //fetchData();
  //console.log(resArray);
  return (
    <>
      <div>
        <input
          id="txt"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            //searchText = document.getElementById("txt").value;
            //console.log(e);
            //console.log(searchText);
          }}
        />
        <button
          onClick={(e) => {
            // console.log(e);
            // console.log("Search button clicked");
            console.log(searchText);
            var filteredArray = resArray.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            console.log(filteredArray);
            setFilteredArray(filteredArray);
          }}
        >
          Search
        </button>

        <button
          onClick={(e) => {
            var filteredArray = resArray.filter(
              (res) => res.info.avgRating > 4.5,
            );
            //console.log(filteredArray);
            setFilteredArray(filteredArray);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {console.log(filteredArray)}
        {filteredArray.map(function (value, index, array) {
          //console.log("TEST");
          return <ResCard key={index} resData={value} />;
        })}
      </div>
    </>
  );
}

export default Body;
