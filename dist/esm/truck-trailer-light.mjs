export const name="truck-trailer-light";
export const id="dl_ec550745ea451afb3571";
export const url=new URL("../icons/truck-trailer-light.svg?v=8b9518e3f20dcfbfe1fb67e00b86481de9a07cc099d0bc761ce3f00272800b63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
