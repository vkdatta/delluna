export const name="campfire-light";
export const id="dl_bcf6ba04f9af430089a6";
export const url=new URL("../icons/campfire-light.svg?v=6802c2e759bd8bb5f543260bb2240671a8f418d7f0ab3d5112269900d0489a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
