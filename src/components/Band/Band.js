import React from "react";
import Like from "../Like/Like";

function Band({band_name, fans, formed, origin, split, style}) {
  return(
    <div>
      <h2>{ band_name }</h2>
      <p>Origin: { origin } Fans: { fans }</p>
      <p>Formed: { formed } Split: { split }</p>
      <p>{ style }</p>
      <Like />
    </div>
  )
}

export default Band;