export const name="walk_bike-fill";
export const id="dl_10da2161084a852d65dd";
export const url=new URL("../icons/walk_bike-fill.svg?v=2afd02d3c087718c1f330d22408148f0e594b9424e9e763422a53029e04723b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
