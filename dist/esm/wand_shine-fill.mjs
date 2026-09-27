export const name="wand_shine-fill";
export const id="dl_baaec1713314fbbbcb4f";
export const url=new URL("../icons/wand_shine-fill.svg?v=f27fffc2ce62776a24f9151276e738a0b13e2246879da4c6bbd6c18d410757f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
