import { FavouriteContext } from "../context";
import useLocaleStore from "../hooks/useLocaleStore";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocaleStore("favourites", []);

  const addToFavourite = (longitude, latitude, location) => {
    const newFavourite = { longitude, latitude, location };
    setFavourites((prevFavourites) => [...prevFavourites, newFavourite]);
  };

  const removeFromFavourite = (location) => {
    const updatedFavourites = favourites.filter(
      (favourite) => favourite.location !== location
    );
    setFavourites(updatedFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteProvider;
