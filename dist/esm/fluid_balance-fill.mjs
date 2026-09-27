export const name="fluid_balance-fill";
export const id="dl_fb4d1445ab5d19aecc41";
export const url=new URL("../icons/fluid_balance-fill.svg?v=9c7e1d5fbdbe886bca3799b62e9d837c3af9c3f6659adba8b63bdfd6f844c121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
