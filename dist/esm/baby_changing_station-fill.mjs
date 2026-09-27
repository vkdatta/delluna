export const name="baby_changing_station-fill";
export const id="dl_60bf2cbac1928bf83bf3";
export const url=new URL("../icons/baby_changing_station-fill.svg?v=cf6f3cd83d9ed5df2e6d6d88a649bc8713decf9ddc75d616a9a2774cf68ddf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
