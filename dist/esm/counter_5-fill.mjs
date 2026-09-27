export const name="counter_5-fill";
export const id="dl_c6d3f92ff518124388a1";
export const url=new URL("../icons/counter_5-fill.svg?v=276a3c5c40af2eca580297044de2dfb0b0589ea7c56ab5371057f31109d23fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
