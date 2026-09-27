export const name="mobile_hand_left_off-fill";
export const id="dl_a77d87c846c3907ebcaf";
export const url=new URL("../icons/mobile_hand_left_off-fill.svg?v=7b10c9f499885cf5f99d53285fde7048dd3143a162f9d4193e6e33fdad0e63e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
