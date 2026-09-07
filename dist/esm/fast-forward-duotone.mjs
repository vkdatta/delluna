export const name="fast-forward-duotone";
export const id="dl_130934edd8184db7b2ca";
export const url=new URL("../icons/fast-forward-duotone.svg?v=9177f9734d9dc01ff6b3c370dc50196b748249357c2c9ae59179837b62a2f926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
