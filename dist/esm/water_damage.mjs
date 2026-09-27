export const name="water_damage";
export const id="dl_9a1c0f96fbd475d1b8f3";
export const url=new URL("../icons/water_damage.svg?v=608e1c6ed4eb9fe9a9222573edb83e48a08ed1d3c58b072036e7c7c6362b19c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
