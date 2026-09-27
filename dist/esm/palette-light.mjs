export const name="palette-light";
export const id="dl_9213e1905d0642818328";
export const url=new URL("../icons/palette-light.svg?v=7e04b5452435d3f016d96ff33e9689238e42e77262b4274730fc1abf7b08943b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
