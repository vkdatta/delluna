export const name="screen_rotation_up-fill";
export const id="dl_b2ce563caf9917026933";
export const url=new URL("../icons/screen_rotation_up-fill.svg?v=240c49cd5b0b1687adaf8c41a5539272dc0df09094baa7df94c5a46c27605f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
