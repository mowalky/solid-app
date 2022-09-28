import type { Component } from "solid-js";
import { createSignal, createResource, For } from "solid-js";

const Fetch: Component = () => {
  const [slug, setSlug] = createSignal(false);

  const [schedule] = createResource(async () => {
    const getData = await fetch(`https://www.learnwithjason.dev/api/schedule`);
    const data = await getData.json();
    return data;
  });

  const [episode] = createResource(slug, async (slug) => {
    const getData = await fetch(
      `https://www.learnwithjason.dev/api/episode/${slug}`
    );
    const data = await getData.json();
    return data;
  });

  return (
    <>
      <select onChange={(e: any) => setSlug(e.target.value)}>
        <For each={schedule()}>
          {(item: any) => (
            <option value={item.slug.current}>{item.title}</option>
          )}
        </For>
      </select>
      <hr />
      {episode() && (
        <div>
          <h1>{episode().title}</h1>
          <p>{episode().description}</p>
        </div>
      )}
    </>
  );
};

export default Fetch;
