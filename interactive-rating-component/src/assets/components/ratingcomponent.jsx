import React, { useState } from 'react'
import StarSvg from '../svgs/icon-star.svg'

function RatingComponent(props) {
    const { selectedRating, onRatingClick, onSubmit } = props;
    const [submitted, setSubmitted] = useState(false);  
  return (
    <div className="rating-card card">
      <img className="star-svg" src={StarSvg} alt="img" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-section">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            className={`rating ${selectedRating === rating ? 'selected' : ''}`}
            onClick={() => onRatingClick(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        className="submit-btn"
        onClick={onSubmit}
        disabled={!selectedRating}
      >
        Submit
      </button>
    </div>
  )
}

export default RatingComponent
