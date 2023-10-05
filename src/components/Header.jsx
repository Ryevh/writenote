import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth") || false)
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNote</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button className="auth" onClick={handleLogout}>
              <AiFillGoogleCircle />
              Logout
            </button>
          </>
        ) : (
          <button className="auth" onClick={handleLogin}>
            <IoIosLogOut />
            Login
          </button>
        )}
      </nav>
    </header>
  );
};
