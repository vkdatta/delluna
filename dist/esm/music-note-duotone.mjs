export const name="music-note-duotone";
export const id="dl_fc8fb87a20b145c89e79";
export const url=new URL("../icons/music-note-duotone.svg?v=f4a5b441345f10bfe8d4f6590654c5ae5d6d2d1ffeb66732f146edbd34c6d96e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
