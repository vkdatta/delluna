export const name="music_note-fill";
export const id="dl_b7647de5e56d433c84bd";
export const url=new URL("../icons/music_note-fill.svg?v=38f2ea0137bcdeda9fa4fc3fecd664d3474bc60454e64c4a85b85ed31b3888eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
