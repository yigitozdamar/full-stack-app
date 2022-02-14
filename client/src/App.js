import "./App.css";
import { useEffect, useState } from "react";
import Palette from "./components/Palette";
import { init, subscribe } from "./socketApi";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();

    subscribe((color) => setActiveColor(color));
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette />
    </div>
  );
}

export default App;
