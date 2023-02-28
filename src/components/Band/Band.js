import React from "react";
import Like from "../Like/Like";
import './Band.css';

function Band({band_name, fans, formed, origin, split, style}) {
  return(
    <div className="band-container">
      <h2>{ band_name }</h2>
      <p>Origin: { origin } Fans: { fans }</p>
      <p>Formed: { formed } Split: { split }</p>
      <p>{ style }</p>
      <Like />
    </div>
  )
}

export default Band;