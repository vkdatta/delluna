export const name="battery_charging_90-fill";
export const id="dl_69fe05bc99e16aabaac0";
export const url=new URL("../icons/battery_charging_90-fill.svg?v=c54a4523c80db13cd25b2ffe8ff21ede08865abc9d3f01b508492dae85975bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
