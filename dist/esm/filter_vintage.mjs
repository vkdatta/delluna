export const name="filter_vintage";
export const id="dl_60375299b0e64234bf37";
export const url=new URL("../icons/filter_vintage.svg?v=13b6a0677c9144c1f3f2e3e4474562c886776d327e947e1e6bdf4fe4855cb3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
