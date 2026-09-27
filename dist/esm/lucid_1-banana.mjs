export const name="lucid_1-banana";
export const id="dl_f222c1590462433ea979";
export const url=new URL("../icons/lucid_1-banana.svg?v=b332b9e0c1aa068c94434e285eed49516da1f79356d2c612c43d9cfbb61518c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
