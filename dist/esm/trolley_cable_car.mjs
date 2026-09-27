export const name="trolley_cable_car";
export const id="dl_780c82027ff48a688dfc";
export const url=new URL("../icons/trolley_cable_car.svg?v=8c0d60ce1869d8c1a1cacaec207b72f6f2371ef507e4092e75c9c6d610d7d495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
