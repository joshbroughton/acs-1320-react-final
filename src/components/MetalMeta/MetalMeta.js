import React from "react";
import data from '../../metal.json'

function MetalMeta() {
  const totalBands = data.length;
  let totalFans = data.reduce((accumulator, currentValue) => {
    return(accumulator + currentValue.fans);
  }, 0)

  totalFans = totalFans * 1000
  totalFans = totalFans.toLocaleString('en');
  
  return(
    <div>
      <p>Total Bands: { totalBands }</p>
      <p>Total Fans: { totalFans }</p>
    </div>
  )
}

export default MetalMeta;