export const name="battery_charging_90-fill";
export const id="dl_c48748459ea3a92c2a7e";
export const url=new URL("../icons/battery_charging_90-fill.svg?v=1fad77e017467bf012d4a2625234873462620555f5f379cbae14e113c1cdf0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
