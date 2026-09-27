export const name="battery_charging_full_2";
export const id="dl_b9633a5eeee8afa779e0";
export const url=new URL("../icons/battery_charging_full_2.svg?v=f79f5544d869513d8b29f8f6f5b1828473f298e725fc02b6404328b2ec2ddf94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
