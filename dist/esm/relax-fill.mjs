export const name="relax-fill";
export const id="dl_715afcbcb9954a7bade6";
export const url=new URL("../icons/R/relax-fill.svg?v=8efb17e61435ba2914226b36b9a53f5143e171dd32bd9398de0e282fb16ece9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
