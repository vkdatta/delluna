export const name="box_edit-fill";
export const id="dl_73e189addd28326073db";
export const url=new URL("../icons/box_edit-fill.svg?v=e7a1dfeb3fe3021092084c804dbd9b2401f638740e05523493376dfb5254ae24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
