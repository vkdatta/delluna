export const name="fast-forward-duotone";
export const id="dl_130934edd8184db7b2ca";
export const url=new URL("../icons/fast-forward-duotone.svg?v=97521d6f78293a76ccf5e0f454e10912956030f97c3b2eea8afd66eb6fb35a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
