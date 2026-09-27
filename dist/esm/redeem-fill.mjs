export const name="redeem-fill";
export const id="dl_e7d817488728ef35f66b";
export const url=new URL("../icons/redeem-fill.svg?v=a166b4ad81072c36bbeb9405f141cbf448807e4ec75613e28a256780cfc78581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
