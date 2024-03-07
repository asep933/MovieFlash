import React from "react";

const Navbar = ({ setQuery }) => {
  const handleClick = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="title-container">
      <h1 className="title">MovieFlash</h1>

      <div className="menu-container">
        <a className="menu" href="#top-rated">
          Top Rtaed
        </a>
        <input
          onChange={(e) => handleClick(e)}
          className="input"
          placeholder="search movie..."
          type="text"
        />
      </div>
    </div>
  );
};

export default Navbar;
