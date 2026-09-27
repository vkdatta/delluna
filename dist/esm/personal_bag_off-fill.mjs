export const name="personal_bag_off-fill";
export const id="dl_452594785041386866db";
export const url=new URL("../icons/personal_bag_off-fill.svg?v=1911c843f737855f48a13de6d043a8f3584ec91d92998ba9513fdad5a15afd30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
