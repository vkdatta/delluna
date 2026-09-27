export const name="brick-fill";
export const id="dl_620997da4db3588442d7";
export const url=new URL("../icons/brick-fill.svg?v=90278c26db05376058b9a7dccee424edd7a9859995111430a75fc5e9f489344f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
