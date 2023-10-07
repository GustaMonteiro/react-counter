import { useState } from "react";
import Display from "./Display";

import './Counter.css'

export default function Counter() {

  const [value, setValue] = useState(0);

  return (

    <div className="Counter">
      <textarea className="counter-label" placeholder="counter" name="label" cols="30" ></textarea>
      <div className="counter-body">
        <button
          type="button"
          className="bnt minus-bnt"
          onClick={() => setValue(previous => previous - 1)}
        >-1</button>
        <Display value={value} />
        <button
          type="button"
          className="bnt plus-bnt"
          onClick={() => setValue(previous => previous + 1)}
        >-1</button>
      </div>

    </div>
  )
}