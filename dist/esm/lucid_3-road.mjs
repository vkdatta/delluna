export const name="lucid_3-road";
export const id="dl_dac779fc47844aeaa653";
export const url=new URL("../icons/lucid_3-road.svg?v=76d4ae220c550c898a144e5a935d894787682c1c1d0697779c8a3bd620905ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
