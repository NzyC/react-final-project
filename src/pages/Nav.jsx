import React, { useRef } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

export default function Nav({ search }) {
  const ref = useRef(null);
  const navigate = useNavigate()

  function handlechange(e) {
    ref.current.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        search(e.target.value);
        navigate("/search")
      }
    });
  }

  return (
    <div className="nav">
      <div className="nav__left">
        <figure className="logo__container">
          <img className="logo__img" src={Logo} alt="" />
        </figure>
        <ul className="nav__list--items">
          <Link className="nav__list--item" to="/">Home</Link>
          <Link className="nav__list--item">Discover</Link>
          <Link className="nav__list--item">Movies</Link>
          <Link className="nav__list--item">TV Shows</Link>
        </ul>
      </div>
      <div className="nav__right">
        <div className="searchBoxWrapper">
          <Link className="searchBtn" to='/search' onClick={() => {search(ref.current.value)}}>
            <SearchIcon  />
          </Link>
          <input
            className="input-field"
            type="text"
            placeholder="Search for your favourite Movies and TV Shows"
            onChange={handlechange}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
}
