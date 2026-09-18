export const name="water_damage-fill";
export const id="dl_967a618382fa43489033";
export const url=new URL("../icons/water_damage-fill.svg?v=61dbabb07a9407850866e84f92b4f4b72941d2cb048e75fd3335799ec55ed183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
