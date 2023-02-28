import React from "react";
import data from '../../metal.json'

function MetalMeta() {
  const totalBands = data.length;

  return(
    <div>
      <p>Total Bands: { totalBands }</p>
    </div>
  )
}

export default MetalMeta;