import { useEffect, useState } from "react";

const useResData = (API_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch API data
  async function getRestaurants() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Something went wrong with fetching restaurants");
      }

      const json = await response.json();
      console.log("API Response:", json); // Log the complete API response

      // Check if json.data.cards exists
      if (json?.data?.cards) {
        const resData = checkJsonData(json);
        console.log("Extracted Restaurant Data:", resData); // Log the extracted restaurant data
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      } else {
        console.error("Unexpected data structure:", json);
        setAllRestaurants([]);
        setFilteredRestaurants([]);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setAllRestaurants([]); // Clear state on error
      setFilteredRestaurants([]);
    }
  }

  // Function to check and extract restaurant data from JSON
  function checkJsonData(jsonData) {
    const restaurants = []; // Initialize an array to collect all restaurant data
    for (let i = 0; i < jsonData.data.cards.length; i++) {
      const checkData =
        jsonData.data.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (checkData && Array.isArray(checkData)) {
        restaurants.push(...checkData); // Collect all restaurants
      }
    }
    return restaurants; // Return all collected restaurants
  }

  return [allRestaurants, filteredRestaurants]; // Return both states
};

export default useResData;
