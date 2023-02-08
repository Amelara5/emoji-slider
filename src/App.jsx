import { useState } from "react";

const emojis = ["😭", "😩", "😢", "😞", "😐", "😋", "😃", "😁", "😎"];

function App() {
  const [rangeValue, setRangeValue] = useState("4");
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-space-cadet text-floral-white">
      <label htmlFor="emoji-slider">How are you feeling?</label>
      <input
        type="range"
        id="emoji-slider"
        className="accent-tiffany-blue"
        max="8"
        value={rangeValue}
        onChange={(e) => {
          setRangeValue(e.target.value);
        }}
      />
      <div className=" m-6 text-9xl">{emojis[rangeValue]}</div>
    </main>
  );
}

export default App;
