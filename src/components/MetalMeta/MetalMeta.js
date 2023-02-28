import React from "react";
import data from '../../metal.json'
import './MetalMeta.css'

function MetalMeta({ query, setQuery }) {
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
      <input
            value={query}
            placeholder="search the bands!"
            onChange={(e) => setQuery(e.target.value)}
          />
    </div>
  )
}

export default MetalMeta;