import React from "react";

import "./MovieCard.css";

import Star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://www.movieposters.com/cdn/shop/products/wandavision.mp_240x360_crop_center.progressive.jpg?v=1614371756"
        alt=""
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2020</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          pariatur magnam porro enim maiores libero.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
