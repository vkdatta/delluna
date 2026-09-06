export const name="folder-simple-lock-light";
export const id="dl_92677ee884e74cc98e4d";
export const url=new URL("../icons/folder-simple-lock-light.svg?v=0217410f243bc432134d07bac355f2489a1220cf1f77d0ee11e89c8aa23934e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
