import Logo from "./Logo";
import heart from "../assets/heart.svg";
import FavouriteModel from "./FavouriteModel";
import Search from "./Search";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchTerm(term) {
    setSearchTerm(term);
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search searchTerm={searchTerm} onSearchTerm={handleSearchTerm} />
          <div
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
          >
            <img src={heart} alt="" />
            <span>Favourite Locations</span>
          </div>

          {/* <!-- Modal --> */}
          {isModalOpen && <FavouriteModel />}
        </div>
      </nav>
    </header>
  );
}
