import React from "react";

const MovuePopular = ({ poster_path, title, vote_average }) => {
  return (
    <div className="popular-list">
      <div className="overflow">
        <img className="image" src={`${poster_path}`} alt="image" />
      </div>
      <h4 className="title-poster">{title}</h4>
      <span className="title-poster">{vote_average}</span>
    </div>
  );
};

export default MovuePopular;
