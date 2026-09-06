export const name="phosphor-logo-light";
export const id="dl_ab08bdc88a3e4757b540";
export const url=new URL("../icons/phosphor-logo-light.svg?v=5f8287ecf4e3775a2774babcb30cadd31d3f5c13c69a848c3bcd11e372967c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
