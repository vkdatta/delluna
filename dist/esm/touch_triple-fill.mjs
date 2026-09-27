export const name="touch_triple-fill";
export const id="dl_d726949d5749242c1e92";
export const url=new URL("../icons/touch_triple-fill.svg?v=799a32816bf92c534e4d1661caba6b5f8dee718e007e814ca1836fa00d610892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
