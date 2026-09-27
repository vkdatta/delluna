export const name="airplay-duotone";
export const id="dl_5963b1e861674f5aad15";
export const url=new URL("../icons/airplay-duotone.svg?v=5759762043dde6195d3a78dc861547643f8cb36ea9ffd417bc78b27fa8565f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
