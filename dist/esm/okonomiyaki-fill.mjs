export const name="okonomiyaki-fill";
export const id="dl_dd12d5069cb551c5bcd5";
export const url=new URL("../icons/okonomiyaki-fill.svg?v=e8a917411e7df3140dd6921ec7124114c21fb3372b2b2ee10c4db663569e4817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
