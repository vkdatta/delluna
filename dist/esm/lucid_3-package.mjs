export const name="lucid_3-package";
export const id="dl_7c9a0625c7764692a50a";
export const url=new URL("../icons/lucid_3-package.svg?v=382f738703821e8645b9fe74114315a5bab580dd46f460f3a48b40b60455220c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
