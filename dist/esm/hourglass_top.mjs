export const name="hourglass_top";
export const id="dl_331b1530a42198869dee";
export const url=new URL("../icons/material_symbols/hourglass_top.svg?v=ec223c4ac7cb917e5f9058314088b1232c4f6e6c14e44cb7790afaa3dadbd791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
