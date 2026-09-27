export const name="shuffle-fill";
export const id="dl_e03a9d32b234872b556f";
export const url=new URL("../icons/shuffle-fill.svg?v=9b4e0d1647cf14644a10ac81ebab278b3db92207b9f7c5b63a2a77008778c3f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
