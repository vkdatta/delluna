export const name="beer-bottle";
export const id="dl_9c493d03224247bba50e";
export const url=new URL("../../icons/B/beer-bottle.svg?v=9f5ea7a200c21946937aa5d8010b9882862d8bcb7b75a09d61affeec174f5c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
