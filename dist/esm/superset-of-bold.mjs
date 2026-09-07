export const name="superset-of-bold";
export const id="dl_47f200f29a214c22b805";
export const url=new URL("../icons/S/superset-of-bold.svg?v=6cc963384f4eadfa6fc87d3cb7ee2d37084d225ff65021b0522d2de18b49c8a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
