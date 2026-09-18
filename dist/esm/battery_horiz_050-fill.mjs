export const name="battery_horiz_050-fill";
export const id="dl_2d5e9d38d7594c98b52c";
export const url=new URL("../icons/battery_horiz_050-fill.svg?v=a47433416e2b93b93c04c32d30f7f8f0b729b634b6f3573b92eab2fb77f30001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
