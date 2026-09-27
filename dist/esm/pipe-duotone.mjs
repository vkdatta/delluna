export const name="pipe-duotone";
export const id="dl_83c733cb37f1418585a9";
export const url=new URL("../icons/pipe-duotone.svg?v=f80babe773a3c48ee847e3d08d98be3620ccf62805aac6820fb926a26887c6c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
