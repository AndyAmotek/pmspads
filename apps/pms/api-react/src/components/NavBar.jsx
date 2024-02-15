/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StyledNavLink from './StyledNavLink.jsx';
import homebutton from '../assets/HomeButton.png';
import Cookies from 'js-cookie';

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // Verwijder de cookie bij uitloggen
    Cookies.remove('token');
    navigate('/');
    // Sluit het menu
    setMenuOpen(false);
  };

  // Haal de gebruikersinformatie op uit de cookie
  const userToken = Cookies.get('token');
  const user = userToken ? JSON.parse(atob(userToken.split('.')[1])) : null;

  const handleUserPage = () => {
    // Navigeer naar de UserPage wanneer op de knop wordt geklikt
    navigate(`/${user.firstname.toLowerCase()}`);
    // Sluit het menu
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-pink-700 h-40 flex items-center justify-between p-6 text-white">
      <StyledNavLink to="/">
        <p>Home</p>
      </StyledNavLink>
      {user ? (
        <div className="relative group">
          <div
            onClick={toggleMenu}
            className="text-5xl font-extrabold cursor-pointer hover:bg-pink-950 gap-10 
            bg-white text-pink-700 rounded-full w-24 h-24 flex items-center justify-center"
          >
            {`${user.firstname.charAt(0)}${user.lastname.charAt(0)}`}
          </div>
          {menuOpen && (
            <div className="absolute bg-pink-700 text-white text-lg underline p-2 shadow-md mt-2">
              <div className="space-y-2">
                <Link to={`/${user.firstname.toLowerCase()}`} onClick={handleUserPage} className="block">
                  Details
                </Link>
                <button onClick={handleLogout} className="block">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <StyledNavLink to="/login">
          Login
        </StyledNavLink>
      )}
    </div>
  );
};

export default NavBar;
