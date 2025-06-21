import { useContext } from "react";
import search from "../assets/search.svg";
import { LocationContext } from "../context";

export default function Search({ searchTerm, onSearchTerm }) {
  const { setLocation } = useContext(LocationContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      return;
    }

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&key=${
        import.meta.env.VITE_GEO_LOCATION_API_KEY
      }&language=en&pretty=1`
    );

    const { results } = await response.json();

    if (results.length > 0) {
      const { geometry, formatted } = results[0];
      setLocation({
        latitude: geometry.lat,
        longitude: geometry.lng,
        location: formatted,
      });
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          value={searchTerm}
          onChange={(e) => onSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img src={search} />
        </button>
      </div>
    </form>
  );
}
