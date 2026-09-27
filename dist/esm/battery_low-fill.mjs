export const name="battery_low-fill";
export const id="dl_feac4bf675d9e0af3533";
export const url=new URL("../icons/battery_low-fill.svg?v=63d610bb0c8c8c217e069e350dd3f68843c7eee96ceab71348a6d9ad61ed50d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
