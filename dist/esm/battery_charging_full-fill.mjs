export const name="battery_charging_full-fill";
export const id="dl_4bf95cfd899be9cb7189";
export const url=new URL("../icons/battery_charging_full-fill.svg?v=b0c9ca217cbcaff4f0e684177f03f327455a3ca7f00e3d66271144ab84dd5d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
