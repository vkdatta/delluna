export const name="cash-register-fill";
export const id="dl_aa248b91be2d41bcbd6b";
export const url=new URL("../icons/cash-register-fill.svg?v=a1dc2410f33bbbf380a637d5acca6b221e5acd63f30205a569c6d467914d8596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
