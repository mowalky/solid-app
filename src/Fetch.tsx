import { Component, Suspense } from "solid-js";
import { createSignal, createResource, For, Show } from "solid-js";

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
    <div style={{ padding: "15px" }}>
      <select onChange={(e: any) => setSlug(e.target.value)}>
        <For each={schedule()}>
          {(item: any) => (
            <option value={item.slug.current}>{item.title}</option>
          )}
        </For>
      </select>
      <hr />
      <Suspense fallback={<p>loading...</p>}>
        <Show when={episode()}>
          <div>
            <h1>{episode().title}</h1>
            <p>{episode().description}</p>
          </div>
        </Show>
      </Suspense>
    </div>
  );
};

export default Fetch;
