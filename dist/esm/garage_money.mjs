export const name="garage_money";
export const id="dl_4350a35edde03dae568f";
export const url=new URL("../icons/garage_money.svg?v=50d9fa8ac57d9f7f5bec22fd29c53ca2cac27b495e199203cab0d11a3c182cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
