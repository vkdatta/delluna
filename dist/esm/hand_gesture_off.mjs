export const name="hand_gesture_off";
export const id="dl_a2daeedad097685ebb29";
export const url=new URL("../icons/hand_gesture_off.svg?v=0cf1327e82fe4d6ee4581a480f3a03737feedea8027a7c72105373662849b19a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
