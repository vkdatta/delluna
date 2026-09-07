export const name="bezier-curve-light";
export const id="dl_510330b6f05342a88546";
export const url=new URL("../icons/bezier-curve-light.svg?v=74c23caf5fb0611d6985736bb2d8c3818ea8b8c5a843a8ff7f0c6457d418a186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
