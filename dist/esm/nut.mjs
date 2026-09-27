export const name="nut";
export const id="dl_a893abadf2b847598b21";
export const url=new URL("../icons/nut.svg?v=ecfd95134517ecd86694b2bb1e7bd68b3c0e023a01d58ef641de0c2f413cc64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
