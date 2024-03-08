import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../assets/images/homeLogo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-maroon shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="font-bold  sm:text-xl flex flex-wrap justify-center items-center ">
            <img src={homeLogo} alt="logo" width={80} height={80} />
            <span className="text-white font-montserrat text-center">
              House Haven
            </span>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center mr-4 "
        >
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>
        <ul className="flex flex-wrap gap-3  sm:gap-16 justify-center text-lg">
          <Link to="/">
            <li className="text-white hover:text-slate-300 font-montserrat gap-4 ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white hover:text-slate-300 font-montserrat">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profilepic"
              />
            ) : (
              <li className="text-white hover:text-slate-300 font-montserrat">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
