export const name="lucid_3-paw-print";
export const id="dl_f8c34de090684c748f2f";
export const url=new URL("../icons/lucid_3-paw-print.svg?v=8bdcced36994a6c88e1181008bca99ef0c9f88e60771c06fc8dea6db3c34904f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
