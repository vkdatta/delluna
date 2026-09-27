export const name="bag-simple-fill";
export const id="dl_cd53db39c03c4d1fa412";
export const url=new URL("../icons/bag-simple-fill.svg?v=8cf76fdda5535a29de34506b6bf15f652e7f7a4db75228665122f462332784a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
