export const name="music-notes-plus-light";
export const id="dl_301dceca14af4621b53f";
export const url=new URL("../icons/music-notes-plus-light.svg?v=7d39927bed06a1649c8b9c1472e745747ed4b4af7f62feb087b0c881b8f20532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
