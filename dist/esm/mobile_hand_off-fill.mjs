export const name="mobile_hand_off-fill";
export const id="dl_60bf35b84566067b9a47";
export const url=new URL("../icons/mobile_hand_off-fill.svg?v=ddce29533849865fbb9a68b9cdafc7ed4de9ca9d0433fcdb2f416614d9b9b7fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
