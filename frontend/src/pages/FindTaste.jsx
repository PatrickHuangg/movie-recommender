import React from 'react';
import '../styles/FindTaste.css';

function FindTaste() {
  const recommendations = [
    { title: "Batman", match: "99%", platform: "Netflix" },
    { title: "Avengers: Endgame", match: "94%", platform: "Apple TV+" },
    { title: "Harry Potter", match: "93%", platform: "Free" },
    { title: "21 Jump Street", match: "92%", platform: "Free" },
    { title: "Wall-E", match: "91%", platform: "Hulu" },
  ];

  return (
    <div className="FindTaste">
      <div className="recommendation-section">
        {/* Background Overlay Div */}
        <div className="background-overlay"></div>

        <div className="recommendation-text">
          <h1>Movies & TV recommendations based on your taste.</h1>
          <p>Find your next favorite show and stream for free.</p>
          <button className="calculate-button">Calculate Your Taste</button>
        </div>

        <div className="recommendation-list">
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-item">
              <h2>{rec.title}</h2>
              <p>{rec.match} Match</p>
              <p className="platform">{rec.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindTaste;

