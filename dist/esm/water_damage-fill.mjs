export const name="water_damage-fill";
export const id="dl_aab31689d5b20d3afc55";
export const url=new URL("../icons/water_damage-fill.svg?v=40c9048a90db1f0a9cf2cdd3274488ff05b06df67f6a01cd8841e27195fd9571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
