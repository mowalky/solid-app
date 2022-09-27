import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(2);
  let doubleCount = () => count() * 2;

  createEffect(() => {
    console.log(doubleCount());
  });

  return (
    <div>
      {count} ({doubleCount})
      <button onClick={() => setCount(count() + 1)}>Update</button>
    </div>
  );
};

export default App;
