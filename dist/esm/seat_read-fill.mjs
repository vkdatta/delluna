export const name="seat_read-fill";
export const id="dl_d762fbd44ea1c796a6dd";
export const url=new URL("../icons/seat_read-fill.svg?v=7bee06da53eb65d6faf0649d3180917b8910db7c751fb876f9c9c1ae2c3b50ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
