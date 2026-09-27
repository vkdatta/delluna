export const name="forest-fill";
export const id="dl_266a59f8688c99592a0a";
export const url=new URL("../icons/forest-fill.svg?v=963d630d2d13244370c243f24fb7cf8d4c6b1a4b2402112516b7242530c95587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
