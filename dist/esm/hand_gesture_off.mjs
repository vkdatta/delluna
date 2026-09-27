export const name="hand_gesture_off";
export const id="dl_e8933c23f56d71a307e8";
export const url=new URL("../icons/hand_gesture_off.svg?v=ff460bf431559f5b1eca0bf8241d6e7a532cc4e96f53fa591932adfdb7725adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
