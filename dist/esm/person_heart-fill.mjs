export const name="person_heart-fill";
export const id="dl_cb4c195cb08217492643";
export const url=new URL("../icons/person_heart-fill.svg?v=8cee60d89c500c3838b28d0ef9f06cc87b51356fe176669124b9d3a440c9c08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
