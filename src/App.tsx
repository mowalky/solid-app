import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(2);

  const button = <button onClick={() => setCount(count() + 1)}>Update</button>;

  return (
    <div>
      <h1>{() => count() * 2}</h1>
      {button}
    </div>
  );
};

export default App;
