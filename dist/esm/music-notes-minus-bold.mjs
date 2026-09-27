export const name="music-notes-minus-bold";
export const id="dl_e1484f6744ac45f8979e";
export const url=new URL("../icons/music-notes-minus-bold.svg?v=e1a71196ba2dd9858141d85a1f6d4bdb51275b1cf08ae8497dabba2bc55a9258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
