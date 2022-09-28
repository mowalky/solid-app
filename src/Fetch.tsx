import type { Component } from "solid-js";
import { createResource, For } from "solid-js";

const Fetch: Component = () => {
  const [schedule] = createResource(async () => {
    const getData = await fetch(`https://www.learnwithjason.dev/api/schedule`);
    const data = await getData.json();
    return data;
  });

  return (
    <div>
      <For each={schedule()}>{(item: any) => <li>{item.title}</li>}</For>
    </div>
  );
};

export default Fetch;
