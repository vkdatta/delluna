export const name="fire_extinguisher";
export const id="dl_b14bf24198444f219e39";
export const url=new URL("../icons/fire_extinguisher.svg?v=90757b313cf03fdc3bbe5a53573e2afbe380c72cd19144a5ae43fa2c3625e03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
