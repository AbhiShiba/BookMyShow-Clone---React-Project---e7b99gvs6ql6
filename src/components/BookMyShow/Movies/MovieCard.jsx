import React from "react";
import { apiUrl } from "../../importent/api";
import { FaStar } from "react-icons/fa";

export function MovieCard({ item, index }) {
  return (
    <div className="card">
      <div className="movieStyleCard">
        <img
          className="imageCard"
          src={apiUrl.imageBase + item.poster_path}
          alt={item.title}
          key={"image" + index}
        />
        <h4 key={"h5" + index}>{item.title}</h4>
      </div>
      <div className="rating">
        <p key={"LanCard" + index}>
          {item.original_language.charAt(0).toUpperCase() +
            item.original_language.slice(1)}
        </p>
        <p key={"rateCard" + index}>
          <FaStar /> {item.vote_average}
        </p>
      </div>
    </div>
  );
}
