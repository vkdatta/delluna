export const name="cottage";
export const id="dl_e6b4de82d66483147743";
export const url=new URL("../icons/cottage.svg?v=7ccd5ad1a68d5f4ea9a24e13880297f88ae13e31a6532e4c5ad84a14553a85d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
