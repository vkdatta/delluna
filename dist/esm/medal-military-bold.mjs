export const name="medal-military-bold";
export const id="dl_5cf1d3a93e74491490bf";
export const url=new URL("../icons/medal-military-bold.svg?v=990b35bbde84b47bbc38f33314e9b4c8c4fa714040f930179a2a063c550ffc48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
