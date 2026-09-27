export const name="hand_gesture_off-fill";
export const id="dl_cd4b846b8cd7e0e12b08";
export const url=new URL("../icons/hand_gesture_off-fill.svg?v=f8b4544861657a76f04119b82a03320a93825a5d3d6dea3452e329d28b3273dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
