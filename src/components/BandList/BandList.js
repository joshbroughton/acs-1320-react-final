import React from "react";
import data from '../../metal.json'
import Band from "../Band/Band";
import './BandList.css'

function BandList({ query }) {
  const bands = data
    .filter((obj) => {
      const inName = obj.band_name.toLowerCase().includes(query.toLowerCase())
      const inStyles = obj.style.toLowerCase().includes(query.toLowerCase())
      return inName || inStyles;
    })
    .map(({ ID, band_name, fans, formed, origin, split, style}) => {
      return(
        <Band
          key={ID}
          band_name={band_name}
          fans={fans}
          formed={formed}
          origin={origin}
          split={split}
          style={style}
        />
      )
    })

  return(
    <div className="list-container">
      { bands }
    </div>
  )
}

export default BandList;