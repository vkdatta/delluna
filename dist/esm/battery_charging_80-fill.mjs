export const name="battery_charging_80-fill";
export const id="dl_5aa3c7eb5b71b9e3f52e";
export const url=new URL("../icons/battery_charging_80-fill.svg?v=910d361cd47dca00001f3e2bf066ac9a2ab617fd919885c00b2c6bea8151e905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
