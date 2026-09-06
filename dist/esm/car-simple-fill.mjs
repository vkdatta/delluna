export const name="car-simple-fill";
export const id="dl_69db1bc7fc1640eabe26";
export const url=new URL("../icons/car-simple-fill.svg?v=b2c1d411237116a2dee9775048ef7a473d06e760f35d5e88a97ce3884ff29004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
