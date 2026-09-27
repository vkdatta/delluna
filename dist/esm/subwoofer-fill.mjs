export const name="subwoofer-fill";
export const id="dl_bfbc5fb5704f4c5f2c42";
export const url=new URL("../icons/subwoofer-fill.svg?v=f4817b679507d278d455395f7426dcf62458e236e531f9eeb12daaefb35784e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
