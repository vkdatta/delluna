export const name="hash-light";
export const id="dl_a1252a3e30624fdcb81c";
export const url=new URL("../icons/hash-light.svg?v=4bf998c095f73babe88fe5c5c36262c0893427dc64e5f11e5d5032993adf8baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
