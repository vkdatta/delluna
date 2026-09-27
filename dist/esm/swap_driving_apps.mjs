export const name="swap_driving_apps";
export const id="dl_6ef26244da99e9e2b566";
export const url=new URL("../icons/swap_driving_apps.svg?v=801d3d0da653253c5dbb3b6e344b88b34daf64b3f4b4cb25b14dc43ac56a988e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
