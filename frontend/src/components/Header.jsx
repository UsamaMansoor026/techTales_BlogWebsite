import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "../assets/avatar8.jpg";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { userStatus, changeStatus } = useContext(UserContext);

  const handleLogout = () => {
    changeStatus(false);
    navigate("/");
  };
  return (
    <>
      {userStatus && (
        <nav>
          <div className="flex-container container nav__container">
            <Link to="/home" className="nav__logo">
              <h2>TechTales</h2>
            </Link>
            <ul className="nav__menu">
              <li>
                <Link to="/posts/create">Create Post</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li className="relative group">
                <img
                  className="w-9 h-9 rounded-full cursor-pointer"
                  src={Avatar}
                  alt="Avatar"
                />
                <div className="hidden group-hover:block bg-transparent absolute -left-4 z-[999]">
                  <div className="flex flex-col gap-1 mt-2 bg-gray-700 text-white shadow-md w-20 text-center p-4 rounded-md">
                    <p className="cursor-pointer hover:underline hover:scale-105 duration-150">
                      Profile
                    </p>
                    <p
                      className="cursor-pointer hover:underline hover:scale-105 duration-150"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </li>
              {/* <li onClick={handleLogout}>
              <p style={{ cursor: "pointer" }}>Logout</p>
            </li> */}
            </ul>

            <button className="nav__toggle-btn">
              <AiOutlineClose />
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
