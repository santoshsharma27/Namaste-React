import React from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + resId);
      if (!res.ok)
        throw new Error(
          "Something went wrong with fetching restaurants menu data"
        );
      const json = await res.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error(error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
