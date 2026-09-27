export const name="counter_0";
export const id="dl_13584868d0ff121449de";
export const url=new URL("../icons/counter_0.svg?v=5716f3b3d9b53da40bd29b29c2027005e98c0297f259bc608dfdbcac2e9b32e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
