export const name="t-shirt-duotone";
export const id="dl_72be6b83f994620c40c5";
export const url=new URL("../icons/t-shirt-duotone.svg?v=37080d66ef716ba5f5d8a503ae6d7ed2f023fa392ab1d3670d927cc318d33595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
