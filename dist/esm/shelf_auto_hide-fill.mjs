export const name="shelf_auto_hide-fill";
export const id="dl_917973e01d00003300df";
export const url=new URL("../icons/shelf_auto_hide-fill.svg?v=1780890ca91df0fb3a0ced631671ac0532553b26e784624441cd2f8bdf818735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
