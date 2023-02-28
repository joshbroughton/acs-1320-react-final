import React from "react";
import data from '../../metal.json'
import Band from "../Band/Band";

function BandList() {
  const bands = data.map(({ id, band_name, fans, formed, origin, split, style}) => {
    return(
      <Band
        key={id}
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
    <div>
      { bands }
    </div>
  )
}

export default BandList;