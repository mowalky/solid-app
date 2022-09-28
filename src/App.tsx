import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

import Fetch from "./Fetch";

const App: Component = () => {
  const [count, setCount] = createSignal(2);

  createEffect(() => console.log(count()));

  const button = <button onClick={() => setCount(count() + 1)}>Update</button>;

  return (
    <div>
      <h1>{() => count() * 2}</h1>
      {button}
      <hr />
      <Fetch />
    </div>
  );
};

export default App;
