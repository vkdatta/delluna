export const name="electric_meter-fill";
export const id="dl_b139f4c248aae22ddad6";
export const url=new URL("../icons/electric_meter-fill.svg?v=90599bc008a6a0ce392777eb5be2accd80ca61c7f862065b23b68d2b031780f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
