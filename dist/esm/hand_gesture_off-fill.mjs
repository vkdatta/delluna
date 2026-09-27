export const name="hand_gesture_off-fill";
export const id="dl_32ec13ac4888e3674f7d";
export const url=new URL("../icons/hand_gesture_off-fill.svg?v=4c718682e27a486d28eb21917c06615ff049722d03233858a7c2be18f692d166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
