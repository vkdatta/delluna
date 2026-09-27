export const name="5k-fill";
export const id="dl_8f24bd7e34cbc5d587e4";
export const url=new URL("../icons/5k-fill.svg?v=521a129369502343f4eaf1ca6e5b0bf4c6dc51289eefd4ef8abf51891e3244b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
