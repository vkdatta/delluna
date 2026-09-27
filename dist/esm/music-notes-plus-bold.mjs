export const name="music-notes-plus-bold";
export const id="dl_252c806aeee746e29322";
export const url=new URL("../icons/music-notes-plus-bold.svg?v=d32e5fe01c098a6e8f778b89b8af56ec4aee701cf98f11dde38c30d53379103c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
