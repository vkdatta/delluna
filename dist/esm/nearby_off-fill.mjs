export const name="nearby_off-fill";
export const id="dl_7a64bc0447b36983f684";
export const url=new URL("../icons/nearby_off-fill.svg?v=defea94df5ed5f6d8fb3d7ad175e631b0f913ad6ae68a7734803eccd4a330a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
