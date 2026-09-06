export const name="music-notes-plus-bold";
export const id="dl_252c806aeee746e29322";
export const url=new URL("../icons/music-notes-plus-bold.svg?v=7d5d1c8938fcfc6c17bc8ba9b941d55d4d14cbbfce6f7623be4ddc5256010b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
