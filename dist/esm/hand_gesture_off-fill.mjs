export const name="hand_gesture_off-fill";
export const id="dl_951879f3e601c5e9179c";
export const url=new URL("../icons/hand_gesture_off-fill.svg?v=1b8a9f47fe13ed6cf2859645d41612bc0d3f3348fede6cd16e33c9614b584764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
