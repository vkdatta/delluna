export const name="battery_charging_full_2-fill";
export const id="dl_2b8c5d4f344678ceb297";
export const url=new URL("../icons/battery_charging_full_2-fill.svg?v=3c5a8ec4e634d5f57c5cef4448675b1ff37a6b74ca212ba7c68dd79cd949f368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
