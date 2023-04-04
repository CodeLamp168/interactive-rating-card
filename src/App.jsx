import React, { useState } from 'react'
import RatingCard from './assets/components/ratingcomponent'
import ThankYou from './assets/components/thankyou'
import './style/style.css'

function App() {

  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    console.log(`Selected rating: ${rating}`);
    setSelectedRating(rating);
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="app-position">
    <RatingCard 
        selectedRating={selectedRating}
        onRatingClick={handleRatingClick}
        onSubmit={handleSubmit}/>
    <ThankYou selectedRating={selectedRating} submitted={submitted} />
    </div>
  )
}

export default App
