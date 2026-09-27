export const name="lucid_1-arrow-down-left";
export const id="dl_a309679dc48a4faea337";
export const url=new URL("../icons/lucid_1-arrow-down-left.svg?v=b1fa51271242137fca8bc13c1107c301a3241895520792706a2f95e185f6edaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
