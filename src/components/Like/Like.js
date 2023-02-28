import { useState } from "react";
import './Like.css'

function Like() {
  const [count, setCount] = useState(0);

  return(
    <div className="like-container">
      <input
        type="button"
        value="&#128078;"
        onClick={() => {if (count > 0) {setCount(count - 1)}}}
      />
      <p>{ count }</p>
      <input
        type="button"
        value="&#128077;"
        onClick={() => setCount(count + 1)}
      />
    </div>
  )
}

export default Like;