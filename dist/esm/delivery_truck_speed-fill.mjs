export const name="delivery_truck_speed-fill";
export const id="dl_af3c684de232373164de";
export const url=new URL("../icons/delivery_truck_speed-fill.svg?v=35f230cabda2e101b61cbf764cdb1b694e366d4fc0abf5575422ba515fcb0bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
