import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg";
import Star from "./star.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
