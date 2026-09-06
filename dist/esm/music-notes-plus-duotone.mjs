export const name="music-notes-plus-duotone";
export const id="dl_cb1f7eb399a84932a33b";
export const url=new URL("../icons/music-notes-plus-duotone.svg?v=29cd9b57cc9bdb542032774770478db5c63887f67666a9e36296f17a0e108706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
