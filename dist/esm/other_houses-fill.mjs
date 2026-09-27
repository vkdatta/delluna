export const name="other_houses-fill";
export const id="dl_a0b2be2582c8a10feb25";
export const url=new URL("../icons/other_houses-fill.svg?v=2b949d0abdda780c2e603943af2ce2861eb5ea022276be6e67a2c19042b8a980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
