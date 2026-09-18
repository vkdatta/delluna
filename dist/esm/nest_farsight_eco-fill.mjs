export const name="nest_farsight_eco-fill";
export const id="dl_dd98dfdd87cb49918de3";
export const url=new URL("../icons/nest_farsight_eco-fill.svg?v=f48943bc4b40e0980e44cc5902b284f1c75868529d09f4c9a1ec32c797b0b7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
