import React from "react";
import data from '../../metal.json'
import Band from "../Band/Band";
import './BandList.css'

function BandList() {
  const bands = data.map(({ ID, band_name, fans, formed, origin, split, style}) => {
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