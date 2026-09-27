export const name="eye_tracking-fill";
export const id="dl_a3cca2aa2ae864555aea";
export const url=new URL("../icons/eye_tracking-fill.svg?v=8b3558ef32619211d3faafcf21d3f268573ddcc37fb0fa00aa92aa815b43c2da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
