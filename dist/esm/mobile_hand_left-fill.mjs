export const name="mobile_hand_left-fill";
export const id="dl_99096207c3c82150df72";
export const url=new URL("../icons/mobile_hand_left-fill.svg?v=173e4eb63badae2e05883f66b0b68740417c6b9b0db5f541b6d0103d63072a58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
