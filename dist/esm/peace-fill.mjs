export const name="peace-fill";
export const id="dl_e5fc9be6bb414b2b8505";
export const url=new URL("../icons/peace-fill.svg?v=f453bdf98bdbf445d0d624cacc24a73c3f8d60e1bee998fe0309051eca21a874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
