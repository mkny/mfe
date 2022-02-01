// @ts-nocheck
import { lazy, Suspense, useState } from "react";
import { Button, Title } from "app1";

const App1 = lazy(() => import("app1/Appname"));
const App2 = lazy(() => import("app2/Appname"));

function App() {
  const [state, setState] = useState(0);

  const handlePressDown = () => {
    setState((i) => i - 1);
  };
  const handlePressUp = () => {
    setState((i) => i + 1);
  };

  return (
    <div>
      <Title>hello world: {state}</Title>
      <Button onClick={handlePressUp} label="up" />
      <Button onClick={handlePressDown} label="down" />

      <div>
        <h3>newComponent</h3>
        <Suspense fallback={<p>Loading container</p>}>
          <App1 />

          <div
            style={{
              border: "1px solid blue",
              padding: 10,
            }}
          >
            <App2 />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
