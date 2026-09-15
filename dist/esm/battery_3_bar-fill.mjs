export const name="battery_3_bar-fill";
export const id="dl_c088b6b7c1bb405f842b";
export const url=new URL("../icons/B/battery_3_bar-fill.svg?v=7e419ea235576f0efd5b96d3f08ddc730f1d5308ab9905ecdea7d48a76097b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
