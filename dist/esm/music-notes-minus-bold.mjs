export const name="music-notes-minus-bold";
export const id="dl_e1484f6744ac45f8979e";
export const url=new URL("../icons/music-notes-minus-bold.svg?v=974b3913f142b2e572f29940661e24d7073e9ebddebcdd637314a49a67f6be8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
