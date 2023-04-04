import React from 'react'
import ThanksSvg from '../svgs/illustration-thank-you.svg';
function ThankYou(props) {
    const { selectedRating, submitted } = props;
  return (
    <div
    className={`thank-you-card card ${submitted ? 'thank-you-active' : ''}`}
  >
    <img className="thanks-svg" src={ThanksSvg} alt="img"></img>
    <h5 className="result-display">You selected {selectedRating} out of 5</h5>
    <h2>Thank You!</h2>
    <p>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
  </div>
  )
}

export default ThankYou
