export const name="attach_file";
export const id="dl_891b1a56a3444ae48e73";
export const url=new URL("../icons/material_symbols/attach_file.svg?v=bda830a41301e50623e7ed9b2e823d8ca653f1ef6f1b3f52f4ae2c59862a7448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
