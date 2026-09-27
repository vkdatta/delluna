export const name="circle-half-duotone";
export const id="dl_bb53989c7a0f4ae18295";
export const url=new URL("../icons/circle-half-duotone.svg?v=5f2c1146f55126b2ee2cda6783721b8a30b32c083f92721cd7a476939f7aeb35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
