export const name="hevc-fill";
export const id="dl_fe484b0c2f7f46a221e1";
export const url=new URL("../icons/hevc-fill.svg?v=8d1e396ff03404de413111032d8c08bc7f3553dad6d2f32ebdb4e560ccc000c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
