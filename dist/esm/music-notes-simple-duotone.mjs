export const name="music-notes-simple-duotone";
export const id="dl_fa3a5f53ab20448a9a0b";
export const url=new URL("../icons/music-notes-simple-duotone.svg?v=ecb7679ae5903825115c2d5435279e00247b722055f3f36c4f03047ce1483ee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
