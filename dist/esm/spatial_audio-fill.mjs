export const name="spatial_audio-fill";
export const id="dl_7cacedb6d1a8ab6aab89";
export const url=new URL("../icons/spatial_audio-fill.svg?v=3a7b97b75e73fb3799f357b2d4ab1be9c997df8d7e7fb37160ca958010669ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
