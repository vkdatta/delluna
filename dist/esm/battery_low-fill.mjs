export const name="battery_low-fill";
export const id="dl_33c62a5a180c4a1594cf";
export const url=new URL("../icons/battery_low-fill.svg?v=21d06642f926ed176b3883fb708429bfa9e5f3a8006e4ee4206cd80fa2d48043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
