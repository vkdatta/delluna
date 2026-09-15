export const name="battery_charging_80_2";
export const id="dl_b8d202ea00ba48578f91";
export const url=new URL("../icons/B/battery_charging_80_2.svg?v=01bb33bdfce5c921539241b4999241c273c8b7e5992e195d6215e8aea45966cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
