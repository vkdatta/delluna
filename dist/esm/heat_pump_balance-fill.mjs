export const name="heat_pump_balance-fill";
export const id="dl_0c57a8a52f55d591f477";
export const url=new URL("../icons/heat_pump_balance-fill.svg?v=e114ab9534c0ef2fbe61df4fb9a42e9ac0fb0a34d63571cd12373dae2c8f07a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
