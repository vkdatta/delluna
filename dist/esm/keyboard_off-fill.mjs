export const name="keyboard_off-fill";
export const id="dl_4c118018296f40f1919c";
export const url=new URL("../icons/keyboard_off-fill.svg?v=6715866849ae2059b4ed582653525d15ba63dd23dbc399ab129493eeda09e44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
