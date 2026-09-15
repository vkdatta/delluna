export const name="battery_charging_full_2-fill";
export const id="dl_ac51ead246384432a1f9";
export const url=new URL("../icons/B/battery_charging_full_2-fill.svg?v=f116aca3c067ff0dd623e9772a33043e9ec23c3009c6ac96ecf0bc515c9ae563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
