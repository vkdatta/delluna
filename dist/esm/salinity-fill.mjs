export const name="salinity-fill";
export const id="dl_a728843568a157067560";
export const url=new URL("../icons/salinity-fill.svg?v=e068133df523f00d60782126c9ab9554ef6818d03cdf781e07a81dc0db46259b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
