export const name="music-notes-simple-duotone";
export const id="dl_fa3a5f53ab20448a9a0b";
export const url=new URL("../icons/music-notes-simple-duotone.svg?v=718ec5993322f6d80e791826e9c05b38b7e5ed811f215f293600ac95505987bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
