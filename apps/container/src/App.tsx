import { useState } from "react";
import * as Button from "app1/Button";

function App() {
  const [state, setState] = useState(0);

  const handlePressDown = () => {
    setState((i) => i - 1);
  };
  // const handlePressUp = () => {
  //   setState((i) => i + 1);
  // };
  console.log({ Button });
  return (
    <div>
      <h3>hello world: {state}</h3>
      {/* <Button label="up" /> */}
      <button onClick={handlePressDown}>down</button>
    </div>
  );
}

export default App;
