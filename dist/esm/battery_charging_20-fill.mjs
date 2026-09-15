export const name="battery_charging_20-fill";
export const id="dl_ed04011d7c4c4a748eb6";
export const url=new URL("../icons/B/battery_charging_20-fill.svg?v=9d18810a7f5af1ed5af6c8ddf28252a61de3abd3f9455a1177f4f4a1df875434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
