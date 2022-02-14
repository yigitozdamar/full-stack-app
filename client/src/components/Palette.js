import React, { useState } from "react";
import { send } from "../socketApi";

const Palette = () => {
  const [color, setColor] = useState("#000");
  return (
    <div className="Palette">
      <input
        type="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
      {color}
    </div>
  );
};

export default Palette;
