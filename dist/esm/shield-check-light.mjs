export const name="shield-check-light";
export const id="dl_8638f7d5de2e05fb6e65";
export const url=new URL("../icons/shield-check-light.svg?v=d55f80e323b2cf9c6feafebc93eca02d8ade8ff5a6226d380ec0fe59188470b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
