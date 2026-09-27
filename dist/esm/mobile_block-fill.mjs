export const name="mobile_block-fill";
export const id="dl_52c9d204188561d133e3";
export const url=new URL("../icons/mobile_block-fill.svg?v=70a543bfe8b3638bf945ab6875252575080c41f7a6eb5b8debcea6d4bf372436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
