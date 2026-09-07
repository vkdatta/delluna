export const name="cash-register-fill";
export const id="dl_aa248b91be2d41bcbd6b";
export const url=new URL("../icons/cash-register-fill.svg?v=a14804940cabd1881e86fffb6f4ba3842d0d4a6fd93072c333104b6f5edaeb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
