export const name="music-notes-plus-bold";
export const id="dl_252c806aeee746e29322";
export const url=new URL("../icons/music-notes-plus-bold.svg?v=6bc49e453d4a014628ed75cadeab722b6a56a035aee3509af3fa8b1d5f8c74ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
