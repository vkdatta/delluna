export const name="crop_16_9";
export const id="dl_62311f91f067fda80aff";
export const url=new URL("../icons/crop_16_9.svg?v=0a8551f0b775face1f7bf97c892696d9c1aff76692746267f176e26e7ff929bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
