export const name="present_to_all-fill";
export const id="dl_f0fd162fd426a35b7d82";
export const url=new URL("../icons/present_to_all-fill.svg?v=3a2dbd1612bf709cc9ded32e48218bc2d78aa4cdb27049096201284310f6379d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
