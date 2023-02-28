import React from "react";
import Like from "../Like/Like";
import './Band.css';

function Band({band_name, fans, formed, origin, split, style}) {
  let likeComponent;
  fans = fans * 1000;
  fans = fans.toLocaleString('en');
  const styles = style.split(',');
  const styleItems = styles.map((style) => {
    return(<li key={style}>{style}</li>);
  })

  if (split === '-') {
    likeComponent = <Like />
  }

  return(
    <div className="band-container">
      <h2>{ band_name }</h2>
      <p>Origin: { origin } Fans: { fans }</p>
      <p>Formed: { formed } Split: { split }</p>
      <h2>Styles</h2>
      <ul>{ styleItems }</ul>
      { likeComponent }
    </div>
  )
}

export default Band;