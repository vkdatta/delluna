export const name="room_preferences";
export const id="dl_3e97f2fb1685551285c3";
export const url=new URL("../icons/room_preferences.svg?v=7b5950cbe4d6c7f7b23f25e33d8505c693d5f37ebe44b4015f65ab222e2c8709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
