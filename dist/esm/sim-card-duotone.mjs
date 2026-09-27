export const name="sim-card-duotone";
export const id="dl_710fb1f64c25f3bd12f2";
export const url=new URL("../icons/sim-card-duotone.svg?v=04bfe8a55ccbe800bffecb08641f2c5f7de915594c78b479c3b1018b5753a25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
