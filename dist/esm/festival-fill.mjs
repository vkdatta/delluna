export const name="festival-fill";
export const id="dl_054c6b49a001ecd0fcb3";
export const url=new URL("../icons/festival-fill.svg?v=a9773122aaafe9297770943794874d0407883c5773f4eb2a8b2831f6579c8179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
