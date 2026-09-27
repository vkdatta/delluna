export const name="mobile_hand_left_off";
export const id="dl_fc772cee4fd0262bf995";
export const url=new URL("../icons/mobile_hand_left_off.svg?v=a2a2b15b368d89f5cb3a6fe13612c31b989963635d7fc2f88d3d2b7d466a26d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
