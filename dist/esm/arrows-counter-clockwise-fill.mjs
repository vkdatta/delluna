export const name="arrows-counter-clockwise-fill";
export const id="dl_89c8a06e684d4446b958";
export const url=new URL("../icons/arrows-counter-clockwise-fill.svg?v=c334f02bef00f92179b439f8462fcbafef2a887604b70dbd1888a560b61c1f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
