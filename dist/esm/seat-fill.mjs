export const name="seat-fill";
export const id="dl_9fbfddcddbc94e06aeb9";
export const url=new URL("../icons/S/seat-fill.svg?v=6d2c86c0fe15e62b67c2d16aa54e74f8b223d28e5f8075127690a0bc7d255515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
