import { useEffect } from "react";
import { useContext, useState } from "react";
import favouriteIcon from "../../assets/heart.svg";
import favouriteRedIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context/index";

export default function AddToFavourite() {
  const { favourites, addToFavourite, removeFromFavourite } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { longitude, latitude, location } = weatherData;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const found = favourites.find(
      (favourite) => favourite.location === location
    );
    setToggle(found);
  }, [favourites, location]);

  const handleFavouriteToggle = () => {
    const found = favourites.find(
      (favourite) => favourite.location === location
    );
    if (found) {
      removeFromFavourite(location);
    } else {
      addToFavourite(longitude, latitude, location);
    }
    setToggle(!toggle);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavouriteToggle}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#dedede82] cursor-pointer"
        >
          <span>Add to Favourite</span>
          <img
            src={toggle ? favouriteRedIcon : favouriteIcon}
            alt="Favourite Icon"
          />
        </button>
      </div>
    </div>
  );
}
