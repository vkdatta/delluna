export const name="watch_screentime";
export const id="dl_96f9a0c8d7074344a888";
export const url=new URL("../icons/watch_screentime.svg?v=ec7a5de62385af49984727b2adf3d6b313724292e1930703682e83b1262b2c06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
