export const name="hand_gesture_off-fill";
export const id="dl_d8a0b18e82a84628b9aa";
export const url=new URL("../icons/H/hand_gesture_off-fill.svg?v=58328e4034658a00f26e19bf995fe9752e15945498693388fd747de07fff4a1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
