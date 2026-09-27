export const name="battery_change";
export const id="dl_8ba706cd2ebb00557d3a";
export const url=new URL("../icons/battery_change.svg?v=0cb8045e8eaa3f1c1074a9abcb1df46adc3db1f13f8b7e24472995843f9a69cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
