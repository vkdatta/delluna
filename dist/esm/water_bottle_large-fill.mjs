export const name="water_bottle_large-fill";
export const id="dl_21789687f42337238986";
export const url=new URL("../icons/water_bottle_large-fill.svg?v=5812068cc0d9750df895db0e990c1fad4cf9f0a01732a12d0c1ca6bf5d4bca8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
