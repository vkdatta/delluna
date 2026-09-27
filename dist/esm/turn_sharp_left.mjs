export const name="turn_sharp_left";
export const id="dl_3ad22872d5ff283661b9";
export const url=new URL("../icons/turn_sharp_left.svg?v=f71081b929e77100e58c89364b3b8986bc55c5f25cae93cbb471bd40a39c621b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
