export const name="desktop-tower-fill";
export const id="dl_00d48adf83c24a4db732";
export const url=new URL("../icons/desktop-tower-fill.svg?v=550db2bee81c1cce5077c8604e4813d112d279f5564acbd4afca70a7b965c09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
