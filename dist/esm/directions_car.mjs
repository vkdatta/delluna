export const name="directions_car";
export const id="dl_9de55264a381ce719322";
export const url=new URL("../icons/directions_car.svg?v=aae88e7695895b238db2a8ac817fa5c4514f4af91ac0f681221e5785714f4386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
