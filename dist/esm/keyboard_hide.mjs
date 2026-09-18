export const name="keyboard_hide";
export const id="dl_e56bf77f78eb47509542";
export const url=new URL("../icons/keyboard_hide.svg?v=a123037086db3c1210fe7ecebaaa0421b34297bd282aac459f9a43a5e6d82258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
