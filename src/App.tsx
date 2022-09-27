import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(2);
  let doubleCount = () => count() * 2;

  const button = <button onClick={() => setCount(count() + 1)}>Update</button>;

  createEffect(() => {
    console.log(doubleCount());
  });

  return (
    <div>
      {count} ({doubleCount}){button}
    </div>
  );
};

export default App;
