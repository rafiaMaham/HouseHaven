import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeLogo from "../assets/images/homeLogo.png";

const Header = () => {
  return (
    <header className="bg-maroon shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold  sm:text-xl flex flex-wrap justify-between items-center ">
            <img src={homeLogo} alt="logo" width={80} height={80} />
            <span className="text-white font-montserrat">House Haven</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center mr-4 ">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex flex-wrap gap-3  sm:gap-16">
          <Link to="/">
            <li className="text-white hover:text-slate-300 font-montserrat gap-4">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white hover:text-slate-300 font-montserrat">
              About
            </li>
          </Link>
          <Link to="signin">
            <li className="text-white hover:text-slate-300 font-montserrat">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
