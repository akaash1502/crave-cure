
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo_final.png";
import UserContext from "../../utils/UserContext";
import useInternetStatus from "../../utils/useInternetStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [darkMode, setDarkMode] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  // useEffect(() => {
  //   const savedMode = localStorage.getItem('dark-mode');
  //   if (savedMode) {
  //     setDarkMode(savedMode === 'true');
  //   }
  // }, []);

  return (
    <div className="bg-slate-50 shadow-md px-6 py-4 flex items-center justify-between dark:bg-[#282828] dark:text-white">
      <Link to="/">
        <img
          className="w-20 h-auto hover:scale-105 transform transition duration-200"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-4 text-gray-700 dark:text-gray-200">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 font-bold">Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="bg-slate-600 text-white w-20 pb-[3px] h-auto rounded-lg"
            onClick={() => setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{loggedInUser}</li>
          {/* Dark Mode Toggle Button */}
          <button
            className= "text-gray-800 dark:text-gray-200 p-2 rounded-lg"
            onClick={handleDarkModeToggle}
          >
            {darkMode ? '☀' : '🌙'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;



