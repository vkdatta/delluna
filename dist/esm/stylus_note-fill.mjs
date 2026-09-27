export const name="stylus_note-fill";
export const id="dl_9550080e8ea16ca9493e";
export const url=new URL("../icons/stylus_note-fill.svg?v=63adff0896f3d1c5accdfb162de24c0865fd7caa7308d6d452da55907d2b954e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
