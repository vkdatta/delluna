export const name="music_note_add";
export const id="dl_1357adda5cf3c3e380c0";
export const url=new URL("../icons/music_note_add.svg?v=4921e889a9728652efa9c37b35a096c464ae19e44a51a85af181dbd3d38271dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
