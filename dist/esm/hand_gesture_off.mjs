export const name="hand_gesture_off";
export const id="dl_a2d7ab086e06c90dadf6";
export const url=new URL("../icons/hand_gesture_off.svg?v=b94b936f7a5a6a006aa66aeeedf9303e42a34f6b74ebff5e708999089163202e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
