import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="card-text fs-1 fw-bold">{card.front}</div>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="card-text fs-1 fw-bold">{card.back}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
