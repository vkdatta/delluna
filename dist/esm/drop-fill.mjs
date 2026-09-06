export const name="drop-fill";
export const id="dl_cb4169fe3c224e4092a3";
export const url=new URL("../icons/drop-fill.svg?v=547974bcf9a14a058c7622a2412bdf25700bd83e610128829f96687e7f8499e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
