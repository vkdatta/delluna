export const name="zoom_in_map-fill";
export const id="dl_8ecd0dbf3082d2c64666";
export const url=new URL("../icons/zoom_in_map-fill.svg?v=5496b37d4ad718b4483a0b4daec7c11500fd4d0360c91ac9d8b8ea8b6eaa42d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
