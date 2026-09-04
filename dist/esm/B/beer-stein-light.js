export const name="beer-stein-light";
export const id="dl_3911307735c74e1aad10";
export const url=new URL("../../icons/B/beer-stein-light.svg?v=833b11e29d5b7cc490eef4a58a0d0aa1a387c239def7150a42aa42ecf520f367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
