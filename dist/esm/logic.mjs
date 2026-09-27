export const name="logic";
export const id="dl_5126c9a196244508b412";
export const url=new URL("../icons/logic.svg?v=6137a0cd4bbcb91f4cb034aea3936459782ac774b3fc1986d471592418ec562a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
